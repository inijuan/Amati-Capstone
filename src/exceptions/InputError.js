const ClientError = require('./ClientError');

class InputError extends ClientError {
    constructor(message) {
        super(message);
        this.name = 'InputError';
        this.statusCode = 422;
    }
}

module.exports = InputError;
