const { checkKeys, checkNulls } = require("../helpers")

//Middlware - Check existence an object in model
module.exports = async (req, res, next) => {
    const { model } = req.params
    const form = req.body

    const keys = checkKeys(model)


    const formkeys = Object.keys(form)

    if (keys.length === formkeys.length) {
        for (let i = 0; i < formkeys.length; i++) {
            if (!(keys.includes(formkeys[i]))) res.status(400).send({ error: "true", message: "error on key " })
        }
    } else {
        return res.status(400).send({ error: "true", message: "missing key on form" })
    }


    const checkObjectToCreate = {
        Actor: () => validateActor(form),
        Director: () => validateDirector('director'),
        Movie: checkNulls(form),
        TvShow: () => validateTvShow('tvshow')
    }

    await checkObjectToCreate[model]

    req.form
    req.token
    next()
}
