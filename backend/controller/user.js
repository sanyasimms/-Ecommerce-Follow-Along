const multer = require('multer');

// Configure multer storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Ensure this folder exists
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

// Initialize multer with storage
const upload = multer({ storage: storage });

// Import Express Router
const express = require('express');
const router = express.Router();

// Use upload properly
router.post("/create-user", upload.single("file"), async (req, res, next) => {
    try {
        res.status(200).json({ message: "File uploaded successfully", file: req.file });
    } catch (error) {
        next(error);
    }
});

module.exports = router;