// Step to connect with mongoose

// 1. install the library
// 2. import the mongoose library
// 3. create an db cluster & add into env file
// 4. function to create an mongoose and use inbuilt function connect 
import mongoose from "mongoose";
import "./../../env.js";
console.log(process.env.URL);
async function ConnectToMongoose(mongoDBURL = process.env.URL){
    try {
        await mongoose.connect(mongoDBURL);
        console.log("MongoDB is connected with mongoose");
    } catch (error) {
        console.log("Error While Connecting to MongoDB", error);
    }
}

export default ConnectToMongoose;
