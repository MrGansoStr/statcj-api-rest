
const getComments = require('./comments.route');
const test = require('./home.route');

const ApiRoutes = [
  getComments,
  test
];

module.exports = ApiRoutes;