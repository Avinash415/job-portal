import DataUriParser from "datauri/parser.js";
import path from "path";

/**
 * @desc    Converts uploaded file buffer into Data URI format
 *          (useful for uploading directly to Cloudinary or other services)
 * @param   {Object} file - Multer file object (with buffer and originalname)
 * @returns {Object} - Contains .content (Data URI string)
 */
const getDataUri = (file) => {
    const parser = new DataUriParser();

    // Extract file extension from original file name (e.g., .jpg, .pdf)
    const extName = path.extname(file.originalname).toString();

    // Format and return file as Data URI
    return parser.format(extName, file.buffer);
};

export default getDataUri;
