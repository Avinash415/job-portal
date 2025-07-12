import mongoose from "mongoose";

/**
 * Application Schema - Represents a job application submitted by a user (student) for a specific job.
 * Tracks applicant, job reference, and application status.
 */
const applicationSchema = new mongoose.Schema({

    // Reference to the job being applied for
    job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job',
        required: true
    },

    // Reference to the user (applicant) who applied
    applicant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    // Status of the application: pending, accepted, or rejected
    status: {
        type: String,
        enum: ['pending', 'accepted', 'rejected'],
        default: 'pending'
    }

}, {
    timestamps: true // Automatically includes createdAt and updatedAt fields
});

// Export Application model
export const Application = mongoose.model("Application", applicationSchema);
