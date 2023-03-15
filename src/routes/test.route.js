
const express = require('express');
const ModelComment = require('../Models/comment.model');
const route = express.Router();
const ListModel = require('../Models/test.model');
const TransformData = require('../utilities/TransformData');

route.get('/test1', async (req, res) => {
  try {
    let data = TransformData(ListModel);
    return res.status(200).send({message: "test", data: data});
  } catch (error) {
    console.log(error);
    return res.status(400).json("Error")
  }
})

module.exports = route;