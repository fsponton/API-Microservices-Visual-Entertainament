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


actorSchema.statics.ById = async function (id) {
    return await this.findById(id)
        .populate("Actor", ["name"])
        .populate("Director", ["name"])
}

actorSchema.statics.order = async function (attributes) {
    return await this.find().sort(attributes)
}



actorSchema.statics.insert = async function (actor) {
    return await this.create(actor)
}

module.exports = actorSchema;