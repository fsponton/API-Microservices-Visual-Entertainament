const { Schema } = require("mongoose")

const YYYYYYYYUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUSchema = Schema({
    _id: String,
    name: {
        type: String,
        required: true,
        lowercase: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        enum: ['Female', 'Male', 'N/A']
    },
    accountCreated: {
        type: Date,
        default: Date.now
    },
    resetToken: String,
    id_actors_favorites: [{ type: String, ref: "Actor" }],
    id_movies_favorites: [{ type: String, ref: "Movie" }],
    id_tvshows_favorites: [{ type: String, ref: "TvShow" }],
    id_directors_favorites: [{ type: String, ref: "Director" }]
})

userSchema.statics.list = async function () {
    return await this.find()
}


module.exports = userSchema;