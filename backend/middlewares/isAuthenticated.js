import jwt from "jsonwebtoken";

/**
 * @desc    Middleware to protect routes by verifying JWT token
 * @access  Private (All protected routes)
 */
const isAuthenticated = async (req, res, next) => {
    try {
        // Get token from cookies
        const token = req.cookies.token;

        // If no token, user is not authenticated
        if (!token) {
            return res.status(401).json({
                message: "User not authenticated",
                success: false,
            });
        }

        // Verify token using secret key
        const decode = await jwt.verify(token, process.env.SECRET_KEY);

        // If verification fails
        if (!decode) {
            return res.status(401).json({
                message: "Invalid token",
                success: false
            });
        }

        // Attach user ID to request object for use in next middleware/controllers
        req.id = decode.userId;

        // Proceed to the next middleware or controller
        next();
    } catch (error) {
        console.log("Authentication Error:", error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
};

export default isAuthenticated;
