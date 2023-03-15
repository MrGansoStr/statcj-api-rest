const express = require('express');
const jwt = require('jsonwebtoken');
const ModelUser = require('../../Models/user.model');
const route = express.Router();
const ResponseMessage = require('../../Models/response.model');
const MakePassword = require('../../utilities/MakePassword');
const ComparePassword = require('../../utilities/ComparePassword');
require('dotenv').config();

route.get('/getusers', async (req, res) => {
  let { message } = ResponseMessage.RequestSuccess;
  try {
    let data = await ModelUser.find();
    return res.status(200).send({ message: message, data: data });
  } catch (error) {
    console.log(error);
    return res.status(400).json("Error");
  }
});

route.post('/register', async (req, res) => {
  let params = { ...req.body };
  try {
    let [list] = await ModelUser.find({
      username: params.username
    }).exec();
    if (list.length != 0) {
      return res.status(401).send(ResponseMessage.RegisterError);
    }
    let user = ModelUser(params);
    user.password = MakePassword(user.password);
    await user.save();
    return res.status(200).send(ResponseMessage.RegisterSuccess)
  } catch (error) {
    console.log(error);
    return res.status(400).send(ResponseMessage.ErrorOcurred);
  }
});

route.post('/login', async (req, res) => {
  let params = { ...req.body };
  try {
    let [user] = await ModelUser.find({
      username: params.username
    });

    if (user.length != 0 && ComparePassword(params.password, user.password)) {

      const token = await jwt.sign(user.toJSON(), process.env.TOKENKEYJWT, { expiresIn: "4h" });

      return res.status(200).send({ message: ResponseMessage.LoginSuccess.message, InfoUser: user, AccessToken: token, ExpiresInt: "5h" });
    }
    else {
      return res.status(401).send(ResponseMessage.LoginError);
    }
  } catch (error) {
    console.log(error);
    return res.status(400).send(ResponseMessage.ErrorOcurred);
  }
});

module.exports = route;