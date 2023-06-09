class validationError extends Error {
    constructor(message, status = 400) {
        super(message);
        this.name = 'validationError'
        this.status = status;
    }
}

class modelError extends Error {
    constructor(message, code = 400) {
        super(message);
        this.name = 'modelError'
        this.code = code;
    }
}


module.exports = { validationError, modelError };