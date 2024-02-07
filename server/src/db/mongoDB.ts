import mongoose from "mongoose";
mongoose
  .connect("mongodb://my_mongo:27017/analitic")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

const userSchema = new mongoose.Schema({
  ip: String,
  date:{
      year: Number,
      month: Number,
      day: Number,
      hour: Number,
      minuet: Number,
      sec: Number,
    }
});


export const User =  mongoose.model("User", userSchema);
