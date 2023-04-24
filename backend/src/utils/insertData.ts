// used to upload sample data to the database

import fs from "fs";
import "dotenv/config";
import mongoose from "mongoose";
import { connectDB } from "../db/connect";
import { User } from "../models/user";

const data = JSON.parse(fs.readFileSync("sample_data.json", "utf-8"));

async function insertData() {
  try {
    console.log("Connecting to DB...");
    await connectDB(process.env.MONGODB_URI as string);
    console.log("Connected to DB!");

    await User.insertMany(data);
    console.log("Data successfully inserted");
  } catch (error) {
    console.error("Error inserting data:", error);
  } finally {
    mongoose.disconnect();
  }
}

insertData();
