import mongoose from "mongoose";

const connectDb = async () => {
    try {
         await mongoose.connect(process.env.DB_URL as string);
         console.log('db connected successfully!');
         
    } catch (error) {
        console.log('failed in connetion with data', error);
        process.exit(1);
        
    }
}

export default connectDb;