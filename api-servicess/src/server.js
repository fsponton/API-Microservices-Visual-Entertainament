const express = require("express");
const morgan = require("morgan");
const { modelError, formError } = require("./utils/errors");


const server = express();
server.use(morgan("dev"));
server.use(express.json());

server.use(require("./routes"));


server.use("*", (req, res) => {
    throw new modelError(`Invalid route, please check`, 404)
})


server.use((err, req, res, next) => {
    //Error - expired token
    if (err.name === "TokenExpiredError" || err.name === "JsonWebTokenError") {
        return res.status(401).send({
            error: true,
            errorName: err.name,
            message: err.message
        })
    }

    if (err.name === "clientError" || err.name === "modelError") {
        return res.status(401).send({
            error: true,
            errorName: err.name,
            message: err.message
        })
    }

    //Errors - responses from db
    return res.status(err.response.status || 500).send({
        error: true,
        errorName: err.response.data.name,
        message: err.response.data.message
    })
})
module.exports = server;
