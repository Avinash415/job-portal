import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import {
  getAdminJobs,
  getAllJobs,
  getJobById,
  postJob
} from "../controllers/job.controller.js";

const router = express.Router();

/**
 * @route   POST /api/v1/job/post
 * @desc    Create a new job posting (Recruiter/Admin)
 * @access  Private
 */
router.route("/post").post(isAuthenticated, postJob);

/**
 * @route   GET /api/v1/job/get
 * @desc    Get all available jobs (Students)
 * @access  Private
 */
router.route("/get").get(isAuthenticated, getAllJobs);

/**
 * @route   GET /api/v1/job/getadminjobs
 * @desc    Get all jobs created by logged-in recruiter/admin
 * @access  Private
 */
router.route("/getadminjobs").get(isAuthenticated, getAdminJobs);

/**
 * @route   GET /api/v1/job/get/:id
 * @desc    Get a specific job by its ID
 * @access  Private
 */
router.route("/get/:id").get(isAuthenticated, getJobById);

export default router;
