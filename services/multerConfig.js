var multer = require("multer");

// Where Multer should store the image locally
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/uploads/")
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname)
    }
});

const fileFilter = (req, file, cb) => {
    if(file.mimetype === "image/jpeg" || file.mimetype === "image/jpg" || file.mimetype === "image/png"){
        cb(null, true);
    }else{
        cb(null,false);
    }
}

const upload = multer({
    storage: storage,
    fileFilter: fileFilter
});

module.exports = {
    upload: upload
}