const { Schema } = require("mongoose")


const actorSchema = Schema({
    _id: String,
    name: {
        type: String,
        required: true,
        lowercase: true,
    },
    gender: {
        type: String,
        enum: ['Female', 'Male', 'N/A']
    },
    birth_year: {
        type: String,
        required: true,
    },
    id_movies_protagonized: [{ type: String, ref: "Movie" }],
    id_tvshows_protagonized: [{ type: String, ref: "TvShow" }]
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