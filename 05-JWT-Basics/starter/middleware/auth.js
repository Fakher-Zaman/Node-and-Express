const authenticationMiddleware = (req, res, next) => {
    console.log(req.headers.authorization);
    next();
}

module.exports = authenticationMiddleware;