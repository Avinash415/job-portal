import { Company } from "../models/company.model.js";
import getDataUri from "../utils/datauri.js";
import cloudinary from "../utils/cloudinary.js";

/**
 * @desc    Register a new company by recruiter
 * @route   POST /api/v1/company/register
 * @access  Private (Recruiter)
 */
export const registerCompany = async (req, res) => {
    try {
        const { companyName } = req.body;

        // Validate input
        if (!companyName) {
            return res.status(400).json({
                message: "Company name is required.",
                success: false
            });
        }

        // Check for existing company with the same name
        let company = await Company.findOne({ name: companyName });
        if (company) {
            return res.status(400).json({
                message: "You can't register the same company again.",
                success: false
            });
        }

        // Create a new company associated with the current user
        company = await Company.create({
            name: companyName,
            userId: req.id // From auth middleware
        });

        return res.status(201).json({
            message: "Company registered successfully.",
            company,
            success: true
        });
    } catch (error) {
        console.log(error);
    }
};

/**
 * @desc    Get all companies registered by the logged-in user
 * @route   GET /api/v1/company
 * @access  Private
 */
export const getCompany = async (req, res) => {
    try {
        const userId = req.id;

        const companies = await Company.find({ userId });
        if (!companies || companies.length === 0) {
            return res.status(404).json({
                message: "Companies not found.",
                success: false
            });
        }

        return res.status(200).json({
            companies,
            success: true
        });
    } catch (error) {
        console.log(error);
    }
};

/**
 * @desc    Get a specific company by its ID
 * @route   GET /api/v1/company/:id
 * @access  Public or Private (as per design)
 */
export const getCompanyById = async (req, res) => {
    try {
        const companyId = req.params.id;

        const company = await Company.findById(companyId);
        if (!company) {
            return res.status(404).json({
                message: "Company not found.",
                success: false
            });
        }

        return res.status(200).json({
            company,
            success: true
        });
    } catch (error) {
        console.log(error);
    }
};

/**
 * @desc    Update company information including logo
 * @route   PUT /api/v1/company/:id
 * @access  Private (Recruiter)
 */
export const updateCompany = async (req, res) => {
    try {
        const { name, description, website, location } = req.body;
        const file = req.file;

        // Upload new logo to Cloudinary
        const fileUri = getDataUri(file);
        const cloudResponse = await cloudinary.uploader.upload(fileUri.content);
        const logo = cloudResponse.secure_url;

        // Prepare update data
        const updateData = { name, description, website, location, logo };

        // Update company by ID
        const company = await Company.findByIdAndUpdate(req.params.id, updateData, { new: true });

        if (!company) {
            return res.status(404).json({
                message: "Company not found.",
                success: false
            });
        }

        return res.status(200).json({
            message: "Company information updated.",
            success: true
        });
    } catch (error) {
        console.log(error);
    }
};
