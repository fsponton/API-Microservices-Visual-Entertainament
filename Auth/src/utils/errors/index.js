class validationError extends Error {
    constructor(message, statusCode = 400) {
        super(message);
        this.name = 'validationError'
        this.statusCode = statusCode;
    }
}


module.exports = { validationError };