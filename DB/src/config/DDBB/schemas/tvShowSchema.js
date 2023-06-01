const { Schema } = require("mongoose")
const genresSchema = require("./miniSchemas")

const tvShowSchema = Schema({
    _id: String,
    title: { type: String, required: true },
    release: { type: String, required: true },
    popularity: Number,
    seasons: Number,
    likes: { type: Number, default: 0 },
    language: { type: String, required: true },
    actors: { type: Array, ref: "Actor" },
    director: { type: String, ref: "Director" },
    genres: genresSchema
})

tvShowSchema.statics.list = async function () {
    return await this.find()
        .populate("actors", ["name"])
        .populate("director", ["name"])
}

tvShowSchema.statics.getById = async function () {
    return await this.find(id)
        .populate("actors", ["name"])
        .populate("director", ["name"])
}

tvShowSchema.statics.insert = async function (show) {
    return await this.create(show)
}

module.exports = tvShowSchema;