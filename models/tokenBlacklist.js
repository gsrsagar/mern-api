const mongoose = require("mongoose")

const tokenBlackList = new mongoose.Schema({
    token:{type:String,required:true},
    createdDate :{ type:Date, default: Date.now(), expires:'2h'}
})

const TokenDeleted = mongoose.model('tokenDeleted',tokenBlackList)

module.exports = TokenDeleted;