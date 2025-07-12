import { Job } from "../models/job.model.js";

/**
 * @desc    Post a new job (Recruiter/Admin only)
 * @route   POST /api/v1/job
 * @access  Private (Recruiter)
 */
export const postJob = async (req, res) => {
    try {
        const {
            title,
            description,
            requirements,
            salary,
            location,
            jobType,
            experience,
            position,
            companyId
        } = req.body;

        const userId = req.id; // Retrieved from auth middleware

        // Validate required fields
        if (!title || !description || !requirements || !salary || !location || !jobType || !experience || !position || !companyId) {
            return res.status(400).json({
                message: "Something is missing.",
                success: false
            });
        }

        // Create job in DB
        const job = await Job.create({
            title,
            description,
            requirements: requirements.split(","), // Convert comma-separated string to array
            salary: Number(salary),
            location,
            jobType,
            experienceLevel: experience,
            position,
            company: companyId,
            created_by: userId
        });

        return res.status(201).json({
            message: "New job created successfully.",
            job,
            success: true
        });
    } catch (error) {
        console.log(error);
    }
};

/**
 * @desc    Get all job listings (Student view with keyword filter)
 * @route   GET /api/v1/job?keyword=developer
 * @access  Public
 */
export const getAllJobs = async (req, res) => {
    try {
        const keyword = req.query.keyword || "";

        // Build search query for title or description
        const query = {
            $or: [
                { title: { $regex: keyword, $options: "i" } },
                { description: { $regex: keyword, $options: "i" } },
            ]
        };

        const jobs = await Job.find(query)
            .populate({ path: "company" }) // Populate company details
            .sort({ createdAt: -1 }); // Newest first

        if (!jobs || jobs.length === 0) {
            return res.status(404).json({
                message: "Jobs not found.",
                success: false
            });
        }

        return res.status(200).json({
            jobs,
            success: true
        });
    } catch (error) {
        console.log(error);
    }
};

/**
 * @desc    Get single job by ID (Student or Recruiter)
 * @route   GET /api/v1/job/:id
 * @access  Public
 */
export const getJobById = async (req, res) => {
    try {
        const jobId = req.params.id;

        const job = await Job.findById(jobId)
            .populate({ path: "applications" }); // Optional: include application details

        if (!job) {
            return res.status(404).json({
                message: "Job not found.",
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
 * @desc    Get all jobs posted by current recruiter (Admin dashboard)
 * @route   GET /api/v1/job/admin
 * @access  Private (Recruiter)
 */
export const getAdminJobs = async (req, res) => {
    try {
        const adminId = req.id;

        const jobs = await Job.find({ created_by: adminId })
            .populate({ path: 'company' })
            .sort({ createdAt: -1 }); // Most recent jobs first

        if (!jobs || jobs.length === 0) {
            return res.status(404).json({
                message: "Jobs not found.",
                success: false
            });
        }

        return res.status(200).json({
            jobs,
            success: true
        });
    } catch (error) {
        console.log(error);
    }
};
