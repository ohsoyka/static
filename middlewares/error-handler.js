module.exports = (error, req, res, next) => { // eslint-disable-line
  console.log(error);
  res.json(error);
};
