const express = require("express");
const morgan = require("morgan")
const { modelError } = require("./utils/errors")
const server = express();


server.use(morgan("dev"));
server.use(express.json());


server.use(require("./routes"))

//Error - route invalid
server.use("*", (req, res) => {
    throw new modelError(`Invalid route, please check`, 404)
})


//Ocurred Errors 
server.use((err, req, res, next) => {

    //Errors - validation schemas
    if (err.name === 'ValidationError') {
        return res.status(401).send({
            error: true,
            message: Object.values(err.errors).map(val => val.message)[0]
        })
    }

    //Error - expired token
    if (err.name === "TokenExpiredError" || err.name === "JsonWebTokenError") {
        return res.status(401).send({
            error: true,
            message: `Expired Session or invalid token, please login again`
        })
    }

    //Error - others
    return res.status(err.status || 500).send({
        error: true,
        errorName: err.name,
        message: err.message
    })
})


module.exports = server;
