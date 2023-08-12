const errorHandler = (err, req, res, next) => {
    return res.status(500).json({ msg: `Something went wrong, try again later` });
}

module.exports = errorHandler;