import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import {
  getCompany,
  getCompanyById,
  registerCompany,
  updateCompany
} from "../controllers/company.controller.js";
import { singleUpload } from "../middlewares/mutler.js";

const router = express.Router();

/**
 * @route   POST /api/v1/company/register
 * @desc    Register a new company (Recruiter)
 * @access  Private
 */
router.route("/register").post(isAuthenticated, registerCompany);

/**
 * @route   GET /api/v1/company/get
 * @desc    Get all companies registered by the logged-in user
 * @access  Private
 */
router.route("/get").get(isAuthenticated, getCompany);

/**
 * @route   GET /api/v1/company/get/:id
 * @desc    Get details of a specific company by ID
 * @access  Private
 */
router.route("/get/:id").get(isAuthenticated, getCompanyById);

/**
 * @route   PUT /api/v1/company/update/:id
 * @desc    Update company information (e.g., name, logo)
 * @access  Private
 */
router.route("/update/:id").put(isAuthenticated, singleUpload, updateCompany);

export default router;
