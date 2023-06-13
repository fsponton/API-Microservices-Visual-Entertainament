//CATCHEDASYNC IS FOR ONLY FUNCTIONS WITH ASYNC

module.exports = (fn) => {
    return function (req, res, next) {
        fn(req, res, next).catch((err) => {
            next(err)
        })
    }
}

