# pdf-table-extractor

Extract tables from PDF

This package is based on [ronnywang's pdf-table-extractor](https://github.com/ronnywang/pdf-table-extractor) with just a few fixes.

## Install

```bash
$ npm install --save @florpor/pdf-table-extractor
```

## API

### method: pdfTableExtractor
```js
const pdfTableExtractor = require('@florpor/pdf-table-extractor');

pdfTableExtractor('my_file.pdf').then(res => {
    console.log(JSON.stringify(res));
});
```

#### pdfTableExtractor(filePath, options)
- `filePath` <[string]> the path to a pdf file
- `options` <[Object]>
  - `maxEdgesPerPage` <?[number]> maximum number of edges to process per page. if defined and number of identified edges surpasses the setting tables will not be processes for the current page.
  - `progressFunc` <?[function(Object)]> callback to call after each page is processes with the current result object.
- returns: <[Promise]<[Object]>>

## CLI

To use the simple CLI clone this repo and run:

```bash
$ npm install
$ node parse-cmd.js samples/pta_10229_131308_94274.pdf
```

## License
BSD License
