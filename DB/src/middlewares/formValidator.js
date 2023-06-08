const { validateMovie } = require("../helpers")

//Middlware - Check existence an object in model
module.exports = async (req, res, next) => {
    const { model } = req.params
    const form = req.body

    const checkObjectToCreate = {
        Actor: () => validateActor(form),
        Director: () => validateDirector('director'),
        Movie: validateMovie({ form }),
        TvShow: () => validateTvShow('tvshow')

    }
    console.log("llego aca")
    await checkObjectToCreate[model]
    console.log("y aca?")
    next()
}
