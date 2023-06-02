
const { User } = require("../config/DDBB/index")


//Middlware - Existence User
module.exports = async (req, res, next) => {
    const { email, password, name, gender, id_actors_favorites, id_movies_favorites, id_tvshows_favorites, id_directors_favorites } = req.body
    const emailLower = email.toLowerCase().trim()

    const user = await User.findOne({ email: emailLower })

    if (user) return res.status(401).send({ status: "error", msg: `User with ${email} already exist's` });

    req.form = {
        name,
        email: emailLower,
        password,
        gender,
        id_actors_favorites,
        id_movies_favorites,
        id_tvshows_favorites,
        id_directors_favorites,
    }

    next()
}
