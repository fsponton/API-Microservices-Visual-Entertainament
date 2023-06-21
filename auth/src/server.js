const express = require("express");
const morgan = require("morgan");
const { modelError } = require("./utils/errors");

const server = express();
server.use(morgan("dev"));
server.use(express.json());

server.use(require("./routes"));


server.use("*", (req, res) => {
    throw new modelError(`Invalid route, please check`, 404)
})


server.use((err, req, res, next) => {

    //Error in form validation (register/login)
    if (err.name === "validationError") {
        return res.status(err.status).send({
            error: true,
            errorName: err.name,
            message: err.message
        })
    }

    //Error's in routes
    if (err.name === "modelError") {
        return res.status(err.code).send({
            error: true,
            errName: err.name,
            message: err.message
        })
    }

    //Error - response's from db (existence object, bad email or bad password)
    return res.status(err.response.status || 500).send({
        error: true,
        errorName: err.response.data.name,
        message: err.response.data.message
    })
})
module.exports = server;
