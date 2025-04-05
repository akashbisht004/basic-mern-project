import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

import productRoutes from './routes/productRoute.js';

dotenv.config()

const app=express();
const PORT=process.env.PORT || 5000;

app.use(express.json()); // middleware to accept json data in req.body

app.use("/api/products",productRoutes);

app.listen(PORT,()=>{
    connectDB();
    console.log("SERVER RUNNING at http://localhost:"+PORT);
});