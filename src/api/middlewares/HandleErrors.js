/**
 * Middleware for handling errors.
 */
const HandleErrorsMiddleware = (error, request, response, next) => {
    return response.status(500).json(error);
}

module.exports = HandleErrorsMiddleware;