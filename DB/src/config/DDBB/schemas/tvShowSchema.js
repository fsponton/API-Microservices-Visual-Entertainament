const { Schema } = require("mongoose")


const tvShowSchema = Schema({
    _id: String,
    title: {
        type: String,
        required: true,
        lowercase: true,
    },
    release: { type: String, required: true },
    popularity: { type: Number, default: 0 },
    seasons: { type: Number, required: true },
    likes: { type: Number, default: 0 },
    language: [{
        type: String,
        required: true,
        lowercase: true,
    }],
    id_actors: [{ type: String, ref: "Actor" }],
    id_director: { type: String, ref: "Director" },
    genres: [{
        type: String,
        enum: ['Comedy', 'Drama', 'Crime', 'Action', 'Sci-Fi', 'Horror', 'Thriller', 'Adventure', 'Romance', 'Mistery', 'Fantasy']
    }]
})

tvShowSchema.statics.list = async function () {
    return await this.find()
        .populate("id_actors", ["id", "name"])
        .populate("id_director", ["id", "name"])
}

tvShowSchema.statics.ById = async function (id) {
    return await this.findById(id)
        .populate("id_actors", ["id", "name"])
        .populate("id_director", ["id", "name"])
}

tvShowSchema.statics.order = async function (attributes) {
    return await this.find().sort(attributes)
}

tvShowSchema.statics.insert = async function (show) {
    return await this.create(show)
}

module.exports = tvShowSchema;