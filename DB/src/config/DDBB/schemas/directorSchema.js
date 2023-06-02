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
    directed_movies: [{ type: Array, ref: "Movie" }],
    directed_tvshows: [{ type: Array, ref: "TvShow" }]
})

directorSchema.statics.list = async function () {
    return await this.find()
        .populate("Movie", ["title", "release"])
        .populate("TvShow", ["title", "realease"])
}


directorSchema.statics.getById = async function () {
    return await this.find(id)
        .populate("Movie", ["title", "release"])
        .populate("TvShow", ["title", "realease"])
}


directorSchema.statics.insert = async function (director) {
    return await this.create(director)
}

module.exports = directorSchema;