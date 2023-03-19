const express = require("express");
const CommentModel = require('../../Models/comment.model');
const route = express.Router();
const ResponseMessage = require('../../Models/response.model');

route.post('/editcomment', async (req, res) => {
  let params = { ...req.body };
  try {
    await CommentModel.updateOne({
      idComment: params.idComment
    }, {
      $set: {
        comment: params.newComment
      }
    }).exec();
    //console.log(some);
    return res.status(200).send(ResponseMessage.UpdateCommentSuccess);
  } catch (error) {
    console.log(error);
    return res.status(400).send(ResponseMessage.ErrorOcurred);
  }
});

route.post('/makecomment', async (req, res) => {
  let params = { ...req.body };
  try {
    let model = CommentModel(params);
    model.timeComment = new Date();
    let response = await model.save();
    //console.log("Response: ", response);
    return res.status(200).send(ResponseMessage.MakeCommentSuccess);
  } catch (error) {
    console.log(error);
    return res.status(400).send(ResponseMessage.ErrorOcurred);
  }
});

route.post('/answercomment', async (req, res) => {
  let params = { ...req.body };
  /**
   * {
   * idToAnswer:
   * userId: 
   * comment: 
   * }
   */
  try {
    let comment = await CommentModel(params);
    await comment.save();
    let comments = await CommentModel.find({
      userId: params.userId
    });
    let lastIdComment = await comments[comments.length - 1]?.idComment;
    
    await CommentModel.updateOne({
      idComment: params.idToAnswer
    }, {
      $push: {
        childComments: lastIdComment
      }
    });
    return res.status(200).send(ResponseMessage.AnswerCommentSuccess);
  } catch (error) {
    console.log(error);
    return res.status(400).send(ResponseMessage.ErrorOcurred);
  }
});

route.post('/deletecomment', async (req, res) => {
  let params = { ...req.body };
  try {
    await CommentModel.deleteOne({
      idComment: params.idComment,
      userId: params.userId
    })
    return res.status(200).send(ResponseMessage.DeleteCommentSuccess);
  } catch (error) {
    console.log(error)
    return res.status(400).send(ResponseMessage.ErrorOcurred);
  }
});

module.exports = route;