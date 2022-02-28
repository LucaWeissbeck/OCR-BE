var express = require('express');
const { upload } = require("../services/multerConfig");
var router = express.Router();
const { unlink } = require("fs/promises");
const performOCR = require("../services/tesseractService")

/* POST image on which an OCR analysis is conducted upon. */
router.post('/', upload.single("image"), async(req, res, next) => {
  console.log(req.body)

  if (!req.file){
    // If no file is attached
    res.status(400).send("Missing Body Parameter")
    return
  }

  // Image is stored locally temporary (/public/uploads)
  const pathName = req.file.path;
  console.log(pathName)


  // Perform OCR
  const OCRResult = await performOCR(pathName)
  console.log(OCRResult)



  // Delete file 
  await unlink(pathName);
  res.send(OCRResult)
});

module.exports = router;
