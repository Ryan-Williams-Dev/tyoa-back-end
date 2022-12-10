const mongoose = require("mongoose");
const Mood = require("./models/moodModel");
const colors = require("colors");
const dotenv = require("dotenv").config();
const moodSeeds = require("./data/moodSeeds");
const userSeeds = require("./data/userSeeds");
const responseSeeds = require("./data/responseSeeds");
const User = require("./models/userModel");
const Response = require("./models/responseModel");
const bcrypt = require("bcryptjs");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

connectDB();

const seedDB = async (data) => {
  // Delete users and reseed users
  try {
    await User.deleteMany({});
    for (let element of data.userSeeds) {
      const { name, email, password } = element;

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      await User.create({
        name,
        email,
        password: hashedPassword,
      });
    }
  } catch (error) {
    console.log("User seed error: ", error);
    throw new Error(error);
  }

  // Delete Moods and reseed moods
  try {
    await Mood.deleteMany({});
    for (let element of data.moodSeeds) {
      await Mood.insertMany(element);
    }
  } catch (error) {
    console.log("Mood seed error: ", error);
    throw new Error(error);
  }

  // Delete responses and reseed responses
  try {
    await Response.deleteMany({});
    for (let element of data.responseSeeds) {
      const selectedMoods = await Mood.findOne({ bad: element.mood });
      const user = await User.findOne({ name: "Seeder" });

      await Response.create({
        text: element.text,
        moods: [selectedMoods._id],
        user: user._id,
      });
    }
  } catch (error) {
    console.log("Response seed error: ", error);
    throw new Error(error);
  }
};

seedDB({ moodSeeds, userSeeds, responseSeeds }).then(() => {
  mongoose.connection.close();
});
