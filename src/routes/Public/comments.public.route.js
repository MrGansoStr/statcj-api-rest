const express = require("express");
const CommentModel = require('../../Models/comment.model');
const route = express.Router();
const ResponseMessage = require('../../Models/response.model');
const TransformData = require('../../utilities/TransformData');
const listModel = require('../../Models/test.model');

route.get('/getcomments', async (req, res) => {
  const listComment = CommentModel;
  try {
    let result = await listComment.aggregate([
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
    let finaldata = TransformData(result);
    //console.log(finaldata);
    return res.status(200).json({ message: ResponseMessage.RequestSuccess.message, data: finaldata});
  } catch (error) {
    console.log(error);
    return res.status(400).send(ResponseMessage.ErrorOcurred);
  }
});


module.exports = route;