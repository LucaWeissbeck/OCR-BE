const tesseract = require("tesseract.js");


// initialises the tesseract worker with start of API for reduced load time at API request
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

