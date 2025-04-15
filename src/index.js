import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";

dotenv.config();

const app = express();

// app.listen(process.env.PORT, () => {
//   console.log(`App is running on port ${process.env.PORT}`);
// });

connectDB();

// another way is written int he db folder in index.js
// ************this is the one way to connect to the db*************

// here we will connrct to the database

// async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("ERROR:", (error) => {
//       console.log("ERROR", error);
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`App is running on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error("ERROR: ", error);
//     throw error;
//   }
// };
