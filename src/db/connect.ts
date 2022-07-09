import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(<string>(process.env.MONGO_DB_URI), );
        console.log(`Connected to MongoDB: ${connection.connection.host}`);
    } catch (error){
        console.log(error);
        process.exit(1)
    }
}
export default connectDB;