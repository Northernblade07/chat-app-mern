import express from 'express';
// to read the .env values 
import dotenv from 'dotenv';
dotenv.config();
// /or do import 'dotenv /config' at the top of the file
import authRoutes from "./routes/auth.route.js";
import { connectDb } from './lib/db.js';
import cookieParser from 'cookie-parser'
import userRoutes from './routes/user.route.js'
import chatRoutes from './routes/chat.route.js'
import cors from 'cors'


const app = express();
const port = process.env.PORT || 5000;

app.use(cors({origin:"http://localhost:5173",
    credentials:true // allow frontend to send the cookies 
}))
app.use(express.json());
app.use(cookieParser());

// routes
app.use('/api/auth', authRoutes)
app.use("/api/users",userRoutes)
app.use("/api/chat",chatRoutes)

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
    connectDb();
})

// noob way to do routes 
// app.get('/api/auth/signup',(req,res)=>{
//     res.send("signup Route")
// })

// app.get('/api/auth/login',(req,res)=>{
//     res.send("login Route")
// })

// app.get('/api/auth/logout',(req,res)=>{
//     res.send("logout Route")
// })
