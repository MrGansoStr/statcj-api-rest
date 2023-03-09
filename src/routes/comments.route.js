const express = require("express");
const CommentModel = require('../Models/comment.model');
const route = express.Router();


route.get('/getcomments', async (req, res) => {
  const listComment = CommentModel;
  try {
    let data = await listComment.find();
    return res.status(200).send(data);
  } catch (error) {
    console.log(error);
  }
})

module.exports = route;