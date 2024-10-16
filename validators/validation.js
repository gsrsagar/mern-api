const Student = require("../models/users");
const TokenDeleted = require("../models/tokenBlacklist");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();



const valdiateToken = async (req, res, next) => {
    let token = req.headers['authorization'].split(" ")[1];
    let blackListedTOken = TokenDeleted.findOne({ token });
    if (!blackListedTOken) {
        const isVerified =     jwt.verify(token, process.env.SECRET_KEY, (err, user) => {

            if (err) res.status(401).json({ message: "Invalid TOKen" })
            else {
                req.user = user;
                next();
            }
        })
    } else {
        res.status(401).json({ message:"You are already Loggedout dont play with me"});
    }

}


module.exports = {
    valdiateToken
}