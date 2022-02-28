

// All tesseract options maay be viewed here: https://github.com/tesseract-ocr/tesseract/blob/main/doc/tesseract.1.asc#options


const worker = require("./tesseractWorker")

const performOCR = async(imagePath) => {
    const { data: { text } } = await worker.recognize(imagePath);
    return text
};

module.exports = performOCR