const validationError = require("../utils/errors")

module.exports = async (req, res, next) => {
    const { form } = req.body

    for (let prop in form) {
        if (!form[prop]) throw new validationError(`Missing value on prop: ${prop}`, 401)
    }

    next()



    // const form = { name, email, gender, password }

    // const props = []
    // for (let prop in form) {
    //     if (!form[prop]) props.push(prop)
    // }


    // const string = props.toString(" ").slice(props.length)

    // if (props.length) return res.status(400).send({ error: "true", mesagge: `Missing value on props: ${string}` })

    // next()
}
