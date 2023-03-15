const bcrypt = require('bcryptjs');
const saltRounds = 10; 

const MakePassword = (pass) => {
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(pass, salt);
  return hash;
}

module.exports = MakePassword;