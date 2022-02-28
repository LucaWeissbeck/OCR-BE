const tesseract = require("node-tesseract-ocr")

const config = {
    lang: "eng", // deu for German
    oem: 1,
    psm: 3,
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