const { Schema } = require("mongoose")
const genderSchema = require("./miniSchemas")

const actorSchema = Schema({
    _id: String,
    name: String,
    role: String,
    movies: { type: Array, ref: "Movie" },
    tvshows: { type: Array, ref: "TvShow" },
    gender: genderSchema
})

actorSchema.statics.list = async function () {
    return await this.find()
        .populate("movies", ["title", "release"])
        .populate("tvshows", ["title", "realease"])
}


actorSchema.statics.getById = async function () {
    return await this.find(id)
        .populate("movies", ["title", "release"])
        .populate("tvshows", ["title", "realease"])
}


actorSchema.statics.insert = async function (actor) {
    return await this.create(actor)
}

module.exports = actorSchema;