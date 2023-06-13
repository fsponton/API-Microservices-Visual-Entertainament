class modelError extends Error {
    constructor(message, code = 400) {
        super(message);
        this.name = 'modelError'
        this.code = code;
    }
}


class tokenError extends Error {
    constructor(message, code = 401) {
        super(message);
        this.name = 'tokenError'
        this.code = code;
    }
}



module.exports = { modelError, tokenError };