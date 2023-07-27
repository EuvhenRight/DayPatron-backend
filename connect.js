import mongoose from "mongoose";
import dayPatron from "./models/DayPatronData.js";
import fs from "fs";

const url = 'mongodb+srv://UhnivenkoEA:azsxdc12345@cluster0.uwwhu0y.mongodb.net/' // Use the environment variable for the MongoDB connection URL

if (!url) {
  throw Error(
    `You did not set up the environment variable 'MONGODB_URL' correctly. Make sure 
    you created a '.env' file and added the variable.`
  );
}

const connectDB = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
    await dayPatron.collection.drop();
      console.log("Data deleted");
      const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
      await dayPatron.insertMany(data);
      console.log("Data imported");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
  }
}

    
  

export default connectDB;
