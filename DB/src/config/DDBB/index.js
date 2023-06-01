const mongoose = require("mongoose")
const { URI_CONNECTION } = require("../enviroments")

const connection = mongoose.createConnection((URI_CONNECTION), { useNewUrlParser: true, useUnifiedTopology: true })

module.exports = {
    Actor: connection.model("Actor", require("./schemas/actorSchema")),
    Director: connection.model("Director", require("./schemas/directorSchema")),
    TvShow: connection.model("TvShow", require("./schemas/tvShowSchema")),
    Movie: connection.model("Movie", require("./schemas/movieSchema")),
    User: connection.model("User", require("./schemas/userSchema"))
}