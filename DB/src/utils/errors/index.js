class modelError extends Error {
    constructor(message, statusCode = 400) {
        super(message);
        this.name = 'modelError'
        this.statusCode = statusCode;
    }
}


class tokenError extends Error {
    constructor(message, statusCode = 401) {
        super(message);
        this.name = 'tokenError'
        this.statusCode = statusCode;
    }
}


module.exports = { modelError, tokenError };