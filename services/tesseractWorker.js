const tesseract = require("tesseract.js");

const worker = tesseract.createWorker({
    logger: m => console.log(m)
});

const initializeWorker = async() => {
    await worker.load();
    await worker.loadLanguage('eng+deu');
    await worker.initialize('eng+deu');
}

initializeWorker()

module.exports = worker

