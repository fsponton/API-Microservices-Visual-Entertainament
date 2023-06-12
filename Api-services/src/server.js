const express = require("express");
const morgan = require("morgan");


const server = express();
server.use(morgan("dev"));
server.use(express.json());



server.use("*", (req, res) => {
    // throw new modelError(`Invalid route, please check`, 404)
    res.status(404).send({ error: "true" })
})


server.use((err, req, res, next) => {

    //error responses from db
    return res.status(err.response.status || 500).send({
        error: true,
        errorName: err.response.data.name,
        message: err.response.data.message
    })
})
module.exports = server;
