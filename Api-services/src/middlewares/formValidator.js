const { validateMovie } = require("../../../DB/src/helpers")

//Middlware - Check existence an object in model
module.exports = async (req, res, next) => {
    const { model } = req.params
    const form = req.body


    console.log("tukiii")
    const checkObjectToCreate = {
        Actor: () => validateActor(form),
        Director: () => validateDirector('director'),
        Movie: validateMovie({ form }),
        TvShow: () => validateTvShow('tvshow')
    }

    await checkObjectToCreate[model]

    next()
}
