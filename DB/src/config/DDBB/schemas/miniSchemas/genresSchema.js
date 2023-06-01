const { Schema } = require("mongoose")

const genresSchema = Schema({
    status: [{
        type: Array,
        enum: ['Comedy', 'Drama', 'Crime', 'Action', 'Sci-Fi', 'Horror', 'Thriller', 'Adventure', 'Romance', 'Mistery', 'Fantasy']
    }]
})

module.exports = genresSchema;