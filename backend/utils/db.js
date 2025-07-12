import mongoose from "mongoose";

/**
 * @desc    Connect to MongoDB using Mongoose
 * @access  Called during server startup
 */
const connectDB = async () => {
    try {
        // Attempt to connect to MongoDB using the connection string from environment variables
        await mongoose.connect(process.env.MONGO_URI);

        // Log success message
        console.log('MongoDB connected successfully');
    } catch (error) {
        // Log any connection errors
        console.error('MongoDB connection failed:', error);
        process.exit(1); // Optional: Exit process if DB connection fails
    }
};

export default connectDB;
