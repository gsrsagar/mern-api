const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({

  name:{ type:String, required:true},
  age:{ type:Number,required:true},
  gender:{ type:String, required:true},
  rollNo:{ type:String,required:true},
  mobileNo:{ type:String, required:true},
  createdDate :{ type:Date, default: Date.now()},
  role: { type:String, default:"student"}
})

const Post = mongoose.model('Users',postSchema)

module.exports = Post;