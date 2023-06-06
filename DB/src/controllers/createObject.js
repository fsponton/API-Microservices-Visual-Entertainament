const store = require("../config/DDBB/index")
const { response } = require("../utils")
const mongoose = require("mongoose")
const { Movie, TvShow } = require("../config/DDBB/index")

module.exports = async (req, res) => {
    const { model } = req.params
    const form = req.body
    const _id = new mongoose.Types.ObjectId;
    const result = await store[model].insert({ ...form, _id })
    if (result instanceof Movie || result instanceof TvShow) {
        const id_actors = form.id_actors
        const idMovie = result._id
        for (const idActor of id_actors) {
            await store.Actor.addMovie(idActor, idMovie)
        }

    }
    response(res, 201, result)
}
