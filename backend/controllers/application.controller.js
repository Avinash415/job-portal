import { Application } from "../models/application.model.js";
import { Job } from "../models/job.model.js";

/**
 * @desc    Apply for a specific job (Student)
 * @route   POST /api/v1/application/:id
 * @access  Private (Student)
 */
export const applyJob = async (req, res) => {
    try {
        const userId = req.id; // From auth middleware
        const jobId = req.params.id;

        if (!jobId) {
            return res.status(400).json({
                message: "Job ID is required.",
                success: false
            });
        }

        // Check if user already applied to this job
        const existingApplication = await Application.findOne({ job: jobId, applicant: userId });
        if (existingApplication) {
            return res.status(400).json({
                message: "You have already applied for this job.",
                success: false
            });
        }

        // Ensure job exists
        const job = await Job.findById(jobId);
        if (!job) {
            return res.status(404).json({
                message: "Job not found.",
                success: false
            });
        }

        // Create new application
        const newApplication = await Application.create({
            job: jobId,
            applicant: userId,
        });

        // Add application reference to job
        job.applications.push(newApplication._id);
        await job.save();

        return res.status(201).json({
            message: "Job applied successfully.",
            success: true
        });
    } catch (error) {
        console.log(error);
    }
};

/**
 * @desc    Get all jobs applied by the current user
 * @route   GET /api/v1/application
 * @access  Private (Student)
 */
export const getAppliedJobs = async (req, res) => {
    try {
        const userId = req.id;

        // Find all applications by the user and populate job and company info
        const application = await Application.find({ applicant: userId })
            .sort({ createdAt: -1 })
            .populate({
                path: 'job',
                populate: {
                    path: 'company',
                }
            });

        if (!application || application.length === 0) {
            return res.status(404).json({
                message: "No applications found.",
                success: false
            });
        }

        return res.status(200).json({
            application,
            success: true
        });
    } catch (error) {
        console.log(error);
    }
};

/**
 * @desc    Get all applicants for a specific job (Admin/Recruiter)
 * @route   GET /api/v1/application/applicants/:id
 * @access  Private (Recruiter)
 */
export const getApplicants = async (req, res) => {
    try {
        const jobId = req.params.id;

        // Find job and populate its applications and each applicant
        const job = await Job.findById(jobId).populate({
            path: 'applications',
            populate: {
                path: 'applicant'
            }
        });

        if (!job) {
            return res.status(404).json({
                message: 'Job not found.',
                success: false
            });
        }

        return res.status(200).json({
            job,
            success: true
        });
    } catch (error) {
        console.log(error);
    }
};

/**
 * @desc    Update the status of a job application (Admin/Recruiter)
 * @route   PUT /api/v1/application/status/:id
 * @access  Private (Recruiter)
 */
export const updateStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const applicationId = req.params.id;

        if (!status) {
            return res.status(400).json({
                message: 'Status is required.',
                success: false
            });
        }

        // Find application by ID
        const application = await Application.findById(applicationId);
        if (!application) {
            return res.status(404).json({
                message: "Application not found.",
                success: false
            });
        }

        // Update application status
        application.status = status.toLowerCase();
        await application.save();

        return res.status(200).json({
            message: "Status updated successfully.",
            success: true
        });

    } catch (error) {
        console.log(error);
    }
};
