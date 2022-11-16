const mongoose = require("mongoose");
const Mood = require("./models/moodModel");
const colors = require("colors");
const dotenv = require("dotenv").config();
const seedMoods = require("./data/moodSeeds");

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
  await Mood.deleteMany({});
  for (let element of data) {
    await Mood.insertMany(element);
  }
};

seedDB([seedMoods]).then(() => {
  mongoose.connection.close();
});
