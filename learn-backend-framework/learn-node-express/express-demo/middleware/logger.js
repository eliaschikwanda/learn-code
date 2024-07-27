function log(req, res, next) {
    console.log('Logging... ');
   next(); // Pass control to the next middleware function.
}

module.exports = log;