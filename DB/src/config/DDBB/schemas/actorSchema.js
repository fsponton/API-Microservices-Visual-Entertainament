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
        .populate("id_movies_protagonized", ["id", "title", "release"])
        .populate("id_tvshows_protagonized", ["id", "title", "realease"])
}


actorSchema.statics.ById = async function (id) {
    return await this.findById(id)
        .populate("id_movies_protagonized", ["id", "title", "release"])
        .populate("id_tvshows_protagonized", ["id", "title", "realease"])
}

actorSchema.statics.order = async function (attributes) {
    return await this.find().sort(attributes)
}



actorSchema.statics.insert = async function (actor) {
    return await this.create(actor)
}

actorSchema.statics.addMovie = async function (idActor, idMovie) {
    console.log("iDDACTOR", typeof idActor)
    let actorr = await this.findOne({ _id: idActor })
    actorr.id_movies_protagonized.push(idMovie)
    return await actorr.save()
}

module.exports = actorSchema;