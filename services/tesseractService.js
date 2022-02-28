const tesseract = require("node-tesseract-ocr")
const germanData = "../data/tesseract_models/deu.traineddata"

// All tesseract options maay be viewed here: https://github.com/tesseract-ocr/tesseract/blob/main/doc/tesseract.1.asc#options

const config = {
    lang: "eng + deu", // German and English
    oem: 1,
    psm: 6,
}

const performOCR = async(imagePath) => {
    try{
        const text = await tesseract.recognize(imagePath, config);
        return text
    }catch (err){
        console.log(err)
        return null
    }
}

module.exports = performOCR