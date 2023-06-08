const store = require("../config/DDBB/index")
const { checkAndModifyName } = require("../helpers")

//Middlware - Check existence an object in model
module.exports = async (req, res, next) => {
    const { model } = req.params

    const result = checkAndModifyName(req.body)
    const value = result.value
    const prop = result.propNameOrTitle

    if (prop === "title") {
        const object = await store[model].findOne({ title: value })
        if (object) return res.status(404).send({ error: "true", message: `${model} with ${prop}: ${value} already exist's` });
    } else {
        const object = await store[model].findOne({ name: value })
        if (object) return res.status(404).send({ error: "true", message: `${model} with ${prop}: ${value} already exist's` });
    }

    req.body[prop] = value

    next()
}
