// index.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRoute from "./Route/book.route.js";
import cors from "cors";

import userRoute from "./Route/user.route.js"
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

if (!URI) {
  console.error("MongoDB URI is not defined in environment variables.");
  process.exit(1);
}

// Connect to MongoDB
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch((error) => {
  console.error("Error connecting to MongoDB:", error);
  process.exit(1);
});

// Use routes
app.use("/book", bookRoute);
app.use("/user" , userRoute)

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
