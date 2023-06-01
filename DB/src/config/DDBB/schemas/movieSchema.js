const { Schema } = require("mongoose")
const genresSchema = require("./miniSchemas")


const movieSchema = Schema({
    _id: String,
    title: { type: String, required: true },
    release: { type: String, required: true },
    popularity: String,
    likes: { type: Number, default: 0 },
    language: { type: String, required: true },
    actors: [{ type: Array, ref: "Actor" }],
    director: [{ type: Array, ref: "Director" }],
    genres: genresSchema
})

movieSchema.statics.list = async function () {
    return await this.find()
        .populate("actors", ["name"])
        .populate("director", ["name"])
}

movieSchema.statics.getById = async function () {
    return await this.find(id)
        .populate("Actor", ["name"])
        .populate("Director", ["name"])
}

movieSchema.statics.insert = async function (movie) {
    return await this.create(movie)
}

module.exports = movieSchema;