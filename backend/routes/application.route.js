import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import {
  applyJob,
  getApplicants,
  getAppliedJobs,
  updateStatus
} from "../controllers/application.controller.js";

const router = express.Router();

/**
 * @route   GET /api/v1/application/apply/:id
 * @desc    Apply to a job by job ID (Student)
 * @access  Private
 */
router.route("/apply/:id").get(isAuthenticated, applyJob);

/**
 * @route   GET /api/v1/application/get
 * @desc    Get all jobs applied by the logged-in student
 * @access  Private
 */
router.route("/get").get(isAuthenticated, getAppliedJobs);

/**
 * @route   GET /api/v1/application/:id/applicants
 * @desc    Get all applicants for a specific job (Recruiter/Admin)
 * @access  Private
 */
router.route("/:id/applicants").get(isAuthenticated, getApplicants);

/**
 * @route   POST /api/v1/application/status/:id/update
 * @desc    Update application status (pending → accepted/rejected)
 * @access  Private
 */
router.route("/status/:id/update").post(isAuthenticated, updateStatus);

export default router;
