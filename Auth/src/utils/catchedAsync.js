//catchedAscync is only for async functions 
module.exports = (fn) => {
    return function (req, res, next) {
        fn(req, res).catch((err) => {
            next(err)
        })
    }
}
