const express = require('express');
const ModelUser = require('../../Models/user.model');
const route = express.Router();
const ResponseMessage = require('../../Models/response.model');
const MakePassword = require('../../utilities/MakePassword');

route.post('/editinfo', async (req, res) => {
  let params = { ...req.body };
  try {
    await ModelUser.updateOne({
      idUser: params.idUser,
    }, {
      $set: {
        gender: params.gender,
        name: params.name,
        password: MakePassword(params.password),
        lastName: params.lastName,
        email: params.email
      }
    }).exec();
    return res.status(200).send(ResponseMessage.EditInfoSuccess);
  } catch (error) {
    //console.log(error);
    return res.status(400).send(ResponseMessage.ErrorOcurred);
  }
});

route.post('/recoveryaccount', async (req, res) => {
  let params = {...req.body};
  try {
    let result = await ModelUser.updateOne({
      username: params.username,
    },{
      $set: {
        password: MakePassword(params.password)
      }
    }).exec();
    if(result.modifiedCount === 0){
      return res.status(401).send(ResponseMessage.RecoveryError)
    }
    return res.status(200).send(ResponseMessage.RecoverySuccess);
  } catch (error) {
    //console.log(error);
    return res.status(400).send(ResponseMessage.ErrorOcurred);
  }
});

module.exports = route;