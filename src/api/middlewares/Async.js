/**
 * Wrapper Async Middleware Function. This function is responsible for handling promises of controller functions.
 */
const async = (callback) => {
    return async (request, response, next) => {
        try {
            await callback(request, response, next);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = async;