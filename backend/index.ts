import express from "express";
import dotenv from "dotenv";
import path from "path";
import cookieParser from "cookie-parser";
import connectToDb from "./config/db";
import authRoute from "./routes/authRoute";
dotenv.config();


const app = express();
const port = process.env.PORT || 8000;
connectToDb();

app.use(express.json());
app.use(cookieParser()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies
app.use("/api/auth", authRoute);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
