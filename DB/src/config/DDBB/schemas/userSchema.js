const { Schema } = require("mongoose")
const genderSchema = require("./miniSchemas")

const userSchema = Schema({
    id: String,
    name: String,
    email: String,
    password: String,
    birth_year: String,
    resetToken: String,
    actors_favorites: [{ type: String, ref: "Actor" }],
    movies_favorites: [{ type: String, ref: "Movie" }],
    tvshows_favorites: [{ type: String, ref: "TvShow" }],
    directors_favorites: [{ type: String, ref: "Director" }],
    gender: genderSchema
})

userSchema.statics.list = async function () {
    return await this.find()
}


module.exports = userSchema;