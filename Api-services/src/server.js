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
    console.log(err)

    //Error - expired token
    if (err.name === "TokenExpiredError" || err.name === "JsonWebTokenError") {
        return res.status(401).send({
            error: true,
            errorName: err.name,
            message: err.message
        })
    }

    //Error responses from db
    return res.status(err.response.status || 500).send({
        error: true,
        errorName: err.response.data.name,
        message: err.response.data.message
    })
})
module.exports = server;
