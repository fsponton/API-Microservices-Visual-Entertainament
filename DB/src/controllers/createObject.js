const mongoose = require("mongoose")
const store = require("../config/DDBB/index")
const { Actor, Movie, Tvshow, Director } = require("../config/DDBB/index")
const { response } = require("../utils")

module.exports = async (req, res) => {
    const model = req.model
    const form = req.body

    const _id = new mongoose.Types.ObjectId;

    const result = await store[model].insert({ ...form, _id })

    if (result instanceof Movie) {
        const id_actors = form.id_actors
        const id_director = form.id_director
        const idMovie = result._id
        for (const idActor of id_actors) {
            await Actor.addMovie(idActor, idMovie)
        }
        await Director.addMovie(id_director, idMovie)
    }

    if (result instanceof Tvshow) {
        const id_actors = form.id_actors
        const id_director = form.id_director
        const idTvShow = result._id
        for (const idActor of id_actors) {
            await Actor.addTvShow(idActor, idTvShow)
        }
        await Director.addTvShow(id_director, idTvShow)
    }

    response(res, 201, result)
}
