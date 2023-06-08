const express = require("express");
const morgan = require("morgan")

const server = express();


server.use(morgan("dev"));
server.use(express.json());


server.use(require("./routes"))

// error - route invalid
server.use("*", (req, res) => {
    res.status(404).send("Not found")
})


//Ocurred Errors in DB
server.use((err, req, res, next) => {

    //Errors - validation schemas
    if (err.name === 'ValidationError') {
        return res.status(401).send({
            error: true,
            message: Object.values(err.errors).map(val => val.message)[0]
        })
    }

    //Error - expired token
    if (err.name === "TokenExpiredError") {
        return res.status(401).send({
            error: true,
            message: `Expired Session, please login`
        })
    }

    console.log(err)
    //Error - others
    return res.status(err.statusCode || 500).send({
        error: true,
        message: err.message
    })
})


module.exports = server;
