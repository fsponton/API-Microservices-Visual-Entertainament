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

class userError extends Error {
    constructor(message, statusCode = 401) {
        super(message);
        this.name = 'userError'
        this.statusCode = statusCode;
    }
}

class objectError extends Error {
    constructor(message, statusCode = 401) {
        super(message);
        this.name = 'objectError'
        this.statusCode = statusCode;
    }
}

module.exports = { modelError, tokenError, userError, objectError };