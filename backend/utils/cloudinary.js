import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

/**
 * @desc    Configure Cloudinary with credentials from environment variables
 * @access  Used globally wherever cloudinary is imported
 */
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,  // Your Cloudinary cloud name
    api_key: process.env.API_KEY,        // Cloudinary API key
    api_secret: process.env.API_SECRET   // Cloudinary API secret
});

// Export the configured Cloudinary instance
export default cloudinary;
