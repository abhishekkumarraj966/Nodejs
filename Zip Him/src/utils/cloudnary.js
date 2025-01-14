import { v2 as cloudinary } from 'cloudinary';
import fs from "fs";

// Configure Cloudinary
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// Function to upload a file to Cloudinary
const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null; // Ensure a file path is provided

        // Upload the file to Cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto" // Automatically detect the resource type (image, video, etc.)
        });

        // File uploaded successfully
        console.log("File is uploaded", response.secure_url);

        return response; // Return the Cloudinary response object
    } catch (error) {
        // Handle errors and clean up the temporary local file
        console.error("Error uploading file:", error);
        if (fs.existsSync(localFilePath)) {
            fs.unlinkSync(localFilePath); // Remove the locally saved temporary file
        }
        return null; // Return null to indicate failure
    }
};

export { uploadOnCloudinary };
