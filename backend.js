const express = require('express');
const bodyParser = require('body-parser');

const port = 3000 || process.env.PORT;
const app = express();

const getRecords = (pageNumber, recordsPerPage) => {
  pageNumber = pageNumber <= 0 ? 1 : pageNumber;
  recordsPerPage = recordsPerPage <= 0 ? 20 : recordsPerPage;
  const start = (pageNumber - 1) * recordsPerPage + 1;
  const end = start + recordsPerPage - 1;
  let records = [];
  for (let i = start; i <= end; i++) {
    records.push({
      id: i,
      name: `Customer ${i}`,
      email: `customer${i}@demo.com`
    });
  }
  return records;
};

const getQueryParam = (req, paramName) => {
  if (!req || !req.query || !paramName) {
    return undefined;
  }

  return req.query[paramName] || undefined;
};

app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.get('/', (req, res) => {
  const pageNumber = parseInt(getQueryParam(req, 'page')) || 1;
  const recordsPerPage = parseInt(getQueryParam(req, 'perpage')) || 20;
  res.send(getRecords(pageNumber, recordsPerPage));
});

app.listen(port, () => {
  console.log(`Listening on: http://localhost:${port}`);
});
