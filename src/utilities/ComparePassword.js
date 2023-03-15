const bcrypt = require('bcryptjs');

const ComparePassword = (pass, passToCompare) => {
  const isEqual = bcrypt.compareSync(pass, passToCompare);
  return isEqual;
}

module.exports = ComparePassword;