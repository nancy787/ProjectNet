import express from "express";
import app from "./app";
import connectDb from "./config/db";

const PORT = 3000;
connectDb();
app.listen( PORT, () => {
    console.log(`app is running in http://localhost:${PORT}` );
})