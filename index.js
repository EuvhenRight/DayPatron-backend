import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";

const port = process.env.PORT || 5000;

const app = express();

dotenv.config();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})