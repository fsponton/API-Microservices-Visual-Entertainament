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
    id_movies_directed: [{ type: Array, ref: "Movie" }],
    id_tvshows_directed: [{ type: Array, ref: "TvShow" }]
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

module.exports = directorSchema;