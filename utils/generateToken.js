const jwt = require("jsonwebtoken");

const generateToken = (User) => {
    return jwt.sign({email: User.email, id: User._id}, process.env.JWT_KEY);
};

module.exports.generateToken = generateToken;