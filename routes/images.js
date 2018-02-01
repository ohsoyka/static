const express = require('express');
const request = require('request');
const mime = require('mime-types');

const config = require('../config').current;

const errorHandler = require('../middlewares/error-handler');

const router = express.Router();

router.get('/*', (req, res, next) => {
  const filename = req.path.slice(1);
  const originalURL = `https://${config.digitalOcean.spaces.name}.${config.digitalOcean.spaces.endpoint}/${config.environment}/images/${filename}`;

  res.header({
    'Content-Disposition': 'inline',
    'Content-Type': mime.lookup(filename),
  });

  return request(originalURL)
    .pipe(res)
    .on('error', error => next(error));
});

router.use(errorHandler);

module.exports = router;
