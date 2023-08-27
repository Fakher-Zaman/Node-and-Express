// check username, password in post(login) request
// if exist create new JWT
// send back to front end

// setup authentication so only the request with JWT can access dashboard

const jwt = require('jsonwebtoken');
const CustomAPIError = require('../errors/custom-error');

const login = async (req, res) => {
    const { username, password } = req.body;
    // When user not provided username or password, we need to throw an error: by using these 3 methods:
    // 1. mongoose validation
    // 2. Joi - package name
    // 3. check in the controller

    if (!username || !password) {
        throw new CustomAPIError('Please provide email and password', 400);
    }

    // just for demo, we will use a fake id
    const id = new Date().getDate();

    // try to keep the payload as small as possible, better for user experience
    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });

    res.status(200).json({ msg: 'user created', token });
};

const dashboard = async (req, res) => {
    console.log(req.user);
    const luckyNumber = Math.floor(Math.random() * 100);
    res.status(200).json({
        msg: `Hello, ${req.user.username}`,
        secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
    });
}

module.exports = {
    login,
    dashboard,
}