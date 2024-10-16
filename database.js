const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const  mongoURI = process.env.mongoURI

const connectDB = async () => {
   try{
    await mongoose.connect(`${mongoURI}`,{});
    console.log('MongoDB connected successfully.');
    // process.exit(1)
   } catch(error){
    console.log(`Eror Connecting with Databse: ${error}`)
   }
 //  mongoose.connection.on(error=>)
}


module.exports ={
    connectDB
}