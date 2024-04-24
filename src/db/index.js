import Mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await Mongoose.connect(
      `mongodb://localhost:27017/youtubeDBB`
    );
    console.log(`\n MongoDB connected ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("MONGODB connection error", error);
    process.exit(1);
  }
};
export default connectDB;
