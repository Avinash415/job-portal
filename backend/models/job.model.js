import mongoose from "mongoose";

/**
 * Job Schema - Defines a job posting created by a recruiter.
 * Includes job details, associated company, creator, and linked applications.
 */
const jobSchema = new mongoose.Schema({

    // Job title (e.g., Frontend Developer, Data Analyst)
    title: {
        type: String,
        required: true
    },

    // Detailed job description
    description: {
        type: String,
        required: true
    },

    // List of specific requirements (skills, qualifications, etc.)
    requirements: [{
        type: String
    }],

    // Offered salary for the position
    salary: {
        type: Number,
        required: true
    },

    // Minimum required experience in years
    experienceLevel: {
        type: Number,
        required: true
    },

    // Job location (e.g., Bengaluru, Remote)
    location: {
        type: String,
        required: true
    },

    // Type of job (e.g., Full-time, Part-time, Internship)
    jobType: {
        type: String,
        required: true
    },

    // Number of open positions for the job
    position: {
        type: Number,
        required: true
    },

    // Reference to the company offering the job
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    },

    // Reference to the user (recruiter) who created the job
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    // Array of application IDs submitted for this job
    applications: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Application',
        }
    ]

}, {
    timestamps: true // Adds createdAt and updatedAt fields automatically
});

// Export Job model
export const Job = mongoose.model("Job", jobSchema);
