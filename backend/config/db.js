import mongoose from "mongoose";

export const connectDB=async ()=>{
    try{
        const con=await mongoose.connect(process.env.MONGO_URL);
        console.log("mongoDB connected: "+con.connection.host);
    }catch(e){
        console.log(e.message);
        process.exit(1); // process code 1 for failure and 0 means success
    }
}