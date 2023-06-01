const { Schema } = require("mongoose")
const genresSchema = require("./miniSchemas")

const tvShowSchema = Schema({
    id: String,
    title: { type: String, required: true },
    release: { type: String, required: true },
    popularity: String,
    likes: { type: Number, default: 0 },
    language: { type: String, required: true },
    actors: [{ type: Array, ref: "Actor" }],
    director: [{ type: Array, ref: "Director" }],
    genres: { type: genresSchema, required: true }
})

tvShowSchema.statics.list = async function () {
    return await this.find()
        .populate("Actor", ["name"])
        .populate("Director", ["name"])
}

tvShowSchema.statics.getById = async function () {
    return await this.find(id)
        .populate("Actor", ["name"])
        .populate("Director", ["name"])
}

tvShowSchema.statics.insert = async function (show) {
    return await this.create(show)
}

module.exports = tvShowSchema;