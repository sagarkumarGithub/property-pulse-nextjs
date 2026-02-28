import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
    mongoose.set("strictQuery", true);

    // Check if already connected
    if(connected) {
       console.log("MongoDB is connected");
       return;
    }

    // Connect to MongoDB
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        connected = true;
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error);
    }
}

export default connectDB;