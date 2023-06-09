class modelError extends Error {
    constructor(message, code = 404) {
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

class userError extends Error {
    constructor(message, code = 401) {
        super(message);
        this.name = 'userError'
        this.code = code;
    }
}

class objectError extends Error {
    constructor(message, code = 401) {
        super(message);
        this.name = 'objectError'
        this.code = code;
    }
}

module.exports = { modelError, tokenError, userError, objectError };