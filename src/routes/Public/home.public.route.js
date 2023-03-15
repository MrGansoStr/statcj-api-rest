const express = require("express");

const ModelComment = require('../../Models/comment.model');
const route = express.Router();

route.get('/', async (req, res) => {
  let listComment = ModelComment;
  try {
    let data = await listComment.aggregate([ {
      $graphLookup: {
        from: "comments",
        startWith: "$childComments",
        connectFromField: "idComment",
        connectToField: "idComment",
        as: "Comments"
      }
    },{
      $unset: "Comments"
    }
  ]).exec();
    console.log(data);
    return res.status(200).send({ message: "Welcome to StatCJ API REST", data: data });
  } catch (error) {
    console.log(error);
    return res.status(400);
  }
});

module.exports = route;