import mongoose from 'mongoose';

const connectDB = async () =>{
    try {
        mongoose.connection.on('connected', ()=> console.log('Database connected'));
        // Remove any trailing slash from MONGODB_URI and append database name
        const uri = process.env.MONGODB_URI.endsWith('/') 
            ? `${process.env.MONGODB_URI}quickshow`
            : `${process.env.MONGODB_URI}/quickshow`;
        await mongoose.connect(uri)
    } catch (error) {
        console.log(error.message);
        
    }
}

export default connectDB;