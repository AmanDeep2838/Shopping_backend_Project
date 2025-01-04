
const userModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {generateToken} = require("../utils/generateToken")

module.exports.registerUser = async function (req, res) {
    try {
        let { email, password, fullname } = req.body;

        let user = await userModel.findOne({email: email});
        if(user) return res.status(401).send("your already have account")

        bcrypt.genSalt(10, function(err, salt){
            bcrypt.hash(password, salt, async function (err, hash) {
                if (err) return res.send(err.message);
                else {
                    let user = await userModel.create({
                        email,
                        password: hash,
                        fullname,
            });
            let token = generateToken(user);
            res.cookie("token", token);
            res.send("user created successfull");
        }
        });
    });
        res.send(user);
    }catch (err){
        res.send(err.message);
    }
}

module.exports.loginUser = async function (req, res) {
    let {email, password} = req.body;

    let user = await userModel.findOne({email: email})
    if (!user) return res.send("Email or passowrd incorrect")
    
    bcrypt.compare(password, user.password, function (err, result){
        if (result) {
            let token = generateToken(user);
            res.cookie("token", token);
            res.send("You can Login");

        }else{
            return res.send("Email or password is not correct")
        }
    })    
}