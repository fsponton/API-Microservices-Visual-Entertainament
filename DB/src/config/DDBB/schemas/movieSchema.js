const { Schema } = require("mongoose")

const movieSchema = Schema({
    _id: String,
    title: {
        type: String,
        required: true,
        lowercase: true,
    },
    release: { type: String, required: true },
    popularity: { type: Number, default: 0 },
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
        enum: ['Comedy', 'Drama', 'Crime', 'Action', 'Sci-Fi', 'Horror', 'Suspence', 'Thriller', 'Adventure', 'Romance', 'Mistery', 'Fantasy']
    }]
})

movieSchema.statics.list = async function () {
    return await this.find()
        .populate("id_actors", ["id", "name"])
        .populate("id_director", ["id", "name"])
}

movieSchema.statics.ById = async function (id) {
    return await this.findById(id)
        .populate("id_actors", ["id", "name"])
        .populate("id_director", ["id", "name"])
}


/// al crear la pelicula y relacionarla con id del actor, 
//previamente cargado, que se actualice el actor con el id de la movie recien creada

movieSchema.statics.order = async function (attributes) {
    return await this.find().sort(attributes)
}




movieSchema.statics.insert = async function (movie) {
    console.log(movie)
    return await this.create(movie)
}

module.exports = movieSchema;