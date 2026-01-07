import mongoose from "mongoose";

const connectDb = async () => {
    try {
         await mongoose.connect('mongodb+srv://nancy:nancy@cluster0.vjnwd.mongodb.net/project_net');
         console.log('db connected successfully!');
         
    } catch (error) {
        console.log('failed in connetion with data', error);
        process.exit(1);
        
    }
}

export default connectDb;