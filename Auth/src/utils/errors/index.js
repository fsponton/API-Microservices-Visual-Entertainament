class validationError extends Error {
    constructor(message, status = 400) {
        super(message);
        this.name = 'validationError'
        this.status = status;
    }
}

module.exports = { validationError };