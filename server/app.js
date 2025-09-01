import express from "express";
import cors from 'cors';
import helmet from 'helmet';
import morgan from "morgan";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import session from 'express-session';
import cookieParser from "cookie-parser";
import mongooseStore from 'connect-mongo';
import path from "path";
import { fileURLToPath } from "url";   // ✅ add this

// Recreate __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Routes
import authRoutes from "./routes/auth.js";
import homeRoutes from './routes/homeSettings.js';

const app = express();
dotenv.config();

// Middelwares
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

// CORS setup (important for session cookies!)
app.use(
    cors({
        origin: process.env.CLIENT_ORIGIN,
        credentials: true, // allow cookies
    })
);
// // Session Middleware
// app.use(session(
//     {
//         name: 'sessionID', // cookie Name
//         resave: false,
//         secret: process.env.SESSION_SECRET,
//         saveUninitialized: false,
//         store: mongooseStore.create({
//             mongoUrl: process.env.MONGO_URI,
//             collectionName: 'sessions'
//         }),
//         cookie: {
//             httpOnly: true,
//             secure: true,
//             maxAge: 1000 * 60 * 60 * 24,
//         },
//         rolling: true  // ⚡ refreshes expiry on every request
//     }
// ))

// Serve React frontend (later after build)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "dist")));
  app.use((req, res, next) => {
  res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});
}

app.get('/', (req, res) => {
    res.send('Server Started');
})

// Routes
app.use('/api', authRoutes);
app.use('/api/home-settings', homeRoutes);

mongoose.connect(process.env.MONGO_URI).then(() => {
    app.listen(process.env.PORT, () => { console.log(`Server running at http://localhost:${process.env.PORT}`) })
}).catch((err) => {
    console.error("❌ MongoDB connection error:", err)
})
