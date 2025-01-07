const jwt = require("jsonwebtoken");

const generateToken = (User) => {
    const secretKey = process.env.JWT_KEY || "defaultSecretKey";
    return jwt.sign(
        { email: User.email, id: User._id },
        secretKey,
        { expiresIn: "1h" }
    );
    // return jwt.sign({email: User.email, id: User._id}, process.env.JWT_KEY, { expiresIn: "1h" });
};

module.exports.generateToken = generateToken;