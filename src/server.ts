import  dotenv from 'dotenv';

import express from "express";
import app from "./app";
import connectDb from "./config/db";

dotenv.config();
const PORT = process.env.PORT
connectDb();
app.listen( PORT, () => {
    console.log(`app is running in http://localhost:${PORT}` );
})