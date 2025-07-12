import mongoose from "mongoose";

/**
 * Company Schema - Represents company profiles created by recruiters.
 * Includes company details and a reference to the user (recruiter) who created it.
 */
const companySchema = new mongoose.Schema({

    // Company name (must be unique)
    name: {
        type: String,
        required: true,
        unique: true
    },

    // Brief company description or overview
    description: {
        type: String
    },

    // Company website URL
    website: {
        type: String
    },

    // Company headquarters or main location
    location: {
        type: String
    },

    // URL to the uploaded company logo image
    logo: {
        type: String
    },

    // Reference to the recruiter (User) who created the company profile
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }

}, {
    timestamps: true // Automatically adds createdAt and updatedAt fields
});

// Export Company model
export const Company = mongoose.model("Company", companySchema);
