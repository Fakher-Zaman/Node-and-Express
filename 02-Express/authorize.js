const authorize = (req, res, next) => {
    const { user } = req.query;
    if (user === 'fakher') {
        req.user = { name: 'fakher', id: 578 };
        next();
    } else {
        res.status(401).send('Unauthorized');
    }
}

module.exports = authorize;