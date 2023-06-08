const express = require("express");
const morgan = require("morgan")

const server = express();


server.use(morgan("dev"));
server.use(express.json());


server.use(require("./routes"))

// si uno pone una ruta que no existe se ve el siguiente error.
server.use("*", (req, res) => {
    res.status(404).send("Not found")
})



//los errores q ocurren en cualquier lugar llegan aca, por ejemplo si falta algun dato en un metodo post. 
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

    //Error - others
    return res.status(err.status || 500).send({
        error: true,
        message: err.data.message
    })
})



module.exports = server;
