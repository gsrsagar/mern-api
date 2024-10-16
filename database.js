const mongoose = require("mongoose");

const  mongoURI = "mongodb://localhost:27017/nodejsapi"

const connectDB = async () => {
   try{
    await mongoose.connect(mongoURI,
        {});
    console.log('MongoDB connected successfully.');
   } catch(error){
    console.log(`Eror Connecting with Databse: ${error}`)
   }
 //  mongoose.connection.on(error=>)
}


module.exports ={
    connectDB
}