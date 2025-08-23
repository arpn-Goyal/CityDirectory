import express from "express";
import cors from 'cors';
import helmet from 'helmet';
import morgan from "morgan";
import dotenv from 'dotenv';
import mongoose from "mongoose";

const app = express();
dotenv.config();

// CORS setup (important for session cookies!)
app.use(
    cors({
        origin: process.env.CLIENT_ORIGIN,
        // credentials: true, // allow cookies
    })
);

// Middelwares
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server Started');
})

mongoose.connect(process.env.MONGO_URI).then(() => {
    app.listen(process.env.PORT, () => { console.log(`Server running at http://localhost:${process.env.PORT}`) })
}).catch((err) => {
    console.error("❌ MongoDB connection error:", err)
})
