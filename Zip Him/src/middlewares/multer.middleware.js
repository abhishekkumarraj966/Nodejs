import multer from "multer";

// Configure storage for multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/temp'); // Set the destination folder for uploaded files
    },
    filename: function (req, file, cb) {
        // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 159);
        cb(null, file.originalname); // Append a unique suffix to the original filename
    }
});

// Create an upload instance with the configured storage
const upload = multer({storage }); // Ensure `storage` is used correctly

export { upload };
 