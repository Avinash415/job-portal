// Importing required modules
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";

// Importing database connection utility and route handlers
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";

// Load environment variables from .env file
dotenv.config({});

// Initialize the Express app
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Middleware to parse URL-encoded data (from forms, etc.)
app.use(express.urlencoded({ extended: true }));

// Middleware to parse cookies from incoming requests
app.use(cookieParser());

// CORS configuration to allow frontend to communicate with backend
const corsOptions = {
    origin: [process.env.CLIENT_URL || "http://localhost:5173"],
    credentials: true, // Allow sending cookies with requests
};

// Apply CORS middleware
app.use(cors(corsOptions));


// Define the port number (from .env or default to 3000)
const PORT = process.env.PORT || 5000;

// API route mappings (versioned as /api/v1)
app.use("/api/v1/user", userRoute);           // Routes for user authentication & management
app.use("/api/v1/company", companyRoute);     // Routes for company-related operations
app.use("/api/v1/job", jobRoute);             // Routes for job posting and listings
app.use("/api/v1/application", applicationRoute); // Routes for job applications

app.get('/', (req, res) => {
  res.send('Job Portal Backend is running ✅');
});

// Start the server and connect to the database
app.listen(PORT, "0.0.0.0", () => {
    connectDB(); // Establish connection to PostgreSQL or MongoDB (as per your setup)
    console.log(`Server running at port ${PORT}`);
});
