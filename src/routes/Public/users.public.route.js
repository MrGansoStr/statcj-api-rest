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
    let data = await ModelUser.aggregate([
      {
        $unset: "password"
      }, {
        $unset: "username"
      }, {
        $unset: "email"
      }
    ]);
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
    let [existEmail] = await ModelUser.find({
      email: params.email
    }).exec();
    if (list !== undefined) { // If there are more users with the same username
      return res.status(401).send({ Code: "Error Username", message: ResponseMessage.RegisterError.message });
    }
    if (existEmail !== undefined) {
      return res.status(401).send({ Code: "Error Email", message: "El email ya está en uso" });
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
    //console.log(user);
    if (user != undefined && user?.length != 0 && ComparePassword(params.password, user.password)) {

      const token = await jwt.sign(user.toJSON(), process.env.TOKENKEYJWT, { expiresIn: "4h" });

      return res.status(200).send({ Code: "Login Success", message: ResponseMessage.LoginSuccess.message, InfoUser: user, AccessToken: token, ExpiresInt: "5h" });
    }
    else {
      return res.status(401).send(ResponseMessage.LoginError);
    }
  } catch (error) {
    console.log(error);
    return res.status(400).send(ResponseMessage.ErrorOcurred);
  }
});

route.post('/recoveryemail', async (req, res) => {
  let params = { ...req.body };
  try {
    let [result] = await ModelUser.aggregate(
      [
        {
          $match: { email: params.email }
        },
        {
          $unset: ["password"],
        }
      ]
    ).exec();
    if (result === undefined) {
      return res.status(401).send(ResponseMessage.EmailError);
    }
    const token = await jwt.sign(result, process.env.TOKENKEYJWT, { expiresIn: "25m" });
    return res.status(200).send({ Code: "Found", username: result.username, message: ResponseMessage.EmailSuccess.message, TokenRecovery: token, TokenExpiresIn: "25m" });
  } catch (error) {
    return res.status(400).send(ResponseMessage.ErrorOcurred);
  }
});

module.exports = route;