const pdfTableExtractor = require('./pdf-table-extractor');

var filePath = process.argv[2];

pdfTableExtractor(filePath).then(res => {
    console.log(JSON.stringify(res));
});
