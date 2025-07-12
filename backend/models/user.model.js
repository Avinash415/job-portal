import mongoose from "mongoose";

/**
 * User Schema - represents both 'students' and 'recruiters'.
 * Includes authentication credentials, profile info, and optional company reference.
 */
const userSchema = new mongoose.Schema({
    // Full name of the user
    fullname: {
        type: String,
        required: true
    },

    // Unique email address for login and communication
    email: {
        type: String,
        required: true,
        unique: true
    },

    // Contact phone number
    phoneNumber: {
        type: Number,
        required: true
    },

    // Hashed password for authentication
    password: {
        type: String,
        required: true
    },

    // User role - either 'student' or 'recruiter'
    role: {
        type: String,
        enum: ['student', 'recruiter'],
        required: true
    },

    // Extended user profile (optional fields)
    profile: {
        // Short bio or summary
        bio: { type: String },

        // Array of skill tags
        skills: [{ type: String }],

        // Resume file URL (stored in cloud like Cloudinary/S3)
        resume: { type: String },

        // Original name of the uploaded resume file
        resumeOriginalName: { type: String },

        // Reference to Company (for recruiters only)
        company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },

        // Profile photo URL
        profilePhoto: {
            type: String,
            default: ""
        }
    }
}, {
    timestamps: true // Automatically manage createdAt and updatedAt fields
});

// Export User model
export const User = mongoose.model('User', userSchema);
