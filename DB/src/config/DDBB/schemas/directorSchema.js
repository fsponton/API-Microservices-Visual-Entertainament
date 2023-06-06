const { Schema } = require("mongoose")

const directorSchema = Schema({
    _id: String,
    name: {
        type: String,
        required: true,
        lowercase: true,
    },
    birth_year: {
        type: String,
        required: true,
    },
    id_movies_directed: [{ type: String, ref: "Movie" }],
    id_tvshows_directed: [{ type: String, ref: "TvShow" }]
})

directorSchema.statics.list = async function () {
    return await this.find()
        .populate("id_movies_directed", ["id", "title", "realease"])
        .populate("id_tvshows_directed", ["id", "title", "realease"])
}


directorSchema.statics.ById = async function (id) {
    return await this.findById(id)
        .populate("id_movies_directed", ["id", "title", "realease"])
        .populate("id_tvshows_directed", ["id", "title", "realease"])
}

directorSchema.statics.insert = async function (director) {
    return await this.create(director)
}


directorSchema.statics.addMovie = async function (idDirector, idMovie) {
    let director = await this.findOne({ _id: idDirector })
    director.id_movies_directed.push(idMovie)
    return await director.save()
}

directorSchema.statics.addTvShow = async function (idDirector, idTvShow) {
    let director = await this.findOne({ _id: idDirector })
    director.id_tvshows_directed.push(idTvShow)
    return await director.save()
}


module.exports = directorSchema;