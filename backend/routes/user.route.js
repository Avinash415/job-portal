import express from "express";
import {
  login,
  logout,
  register,
  updateProfile
} from "../controllers/user.controller.js";

import isAuthenticated from "../middlewares/isAuthenticated.js";
import { singleUpload } from "../middlewares/mutler.js";

const router = express.Router();

/**
 * @route   POST /api/v1/user/register
 * @desc    Register a new user (with profile photo upload)
 * @access  Public
 */
router.route("/register").post(singleUpload, register);

/**
 * @route   POST /api/v1/user/login
 * @desc    Login user and generate token
 * @access  Public
 */
router.route("/login").post(login);

/**
 * @route   GET /api/v1/user/logout
 * @desc    Logout user by clearing cookie token
 * @access  Private
 */
router.route("/logout").get(logout);

/**
 * @route   POST /api/v1/user/profile/update
 * @desc    Update user profile (with resume/profile photo upload)
 * @access  Private
 */
router.route("/profile/update").post(
  isAuthenticated,
  singleUpload,
  updateProfile
);

export default router;
