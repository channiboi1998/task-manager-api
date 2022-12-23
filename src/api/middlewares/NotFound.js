/**
 * Middleware for handling absent routes or resource. 404 Not Found.
 */
const notFound = (request, response) => response.status(404).send('404. Route not found.');

module.exports = notFound;