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


movieSchema.statics.order = async function (attributes) {
    return await this.find().sort(attributes)
}



/// al crear la pelicula, relacionarla con cada id de id_actors, 
// previamente el acgtor debe estar cargado,  actualice el actor con el id de la movie recien creada
movieSchema.statics.insert = async function (form) {
    return await this.create(form)
    // const id_actors = form.id_actors
    // const idMovie = movie._id
    // for (const idActor of id_actors) {
    //     console.log(Actor)
    //     await Actor.statics.addMovie({ idActor, idMovie })
    // }

    return movie
}

module.exports = movieSchema;