const express = require("express");
const CommentModel = require('../../Models/comment.model');
const route = express.Router();
const ResponseMessage = require('../../Models/response.model');
const TransformData = require('../../utilities/TransformData');

route.get('/getcomments', async (req, res) => {
  const listComment = CommentModel;
  let { message } = ResponseMessage.RequestSuccess;
  try {
    let data = await listComment.aggregate([
      {
        $lookup: {
          from: "users",
          localField: "userId",
          foreignField: "idUser",
          as: "Usuario"
        }
      },
      { $unwind: "$Usuario" }, {
        $unset: "Usuario.password"
      }
      /*,
      {
        $graphLookup: {
          from: "comments",
          startWith: "$childComments",
          connectFromField: "idComment",
          connectToField: "idComment",
          as: "Comments"
        }
      }*/
    ]).exec();
    data = TransformData(data);
    return res.status(200).send({ message: message, data: data });
  } catch (error) {
    console.log(error);
    return res.status(400).send(ResponseMessage.ErrorOcurred);
  }
});


module.exports = route;