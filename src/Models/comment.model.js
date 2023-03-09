const mongo = require("mongoose");

const ModelComment = mongo.Schema({
  idComment: {
    type: Number,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  numberLikes: {
    type: Number,
    required: true
  },
  numberDislikes: {
    type: Number,
    required: true
  },
  timeComment: {
    type: Date,
    required: true
  },
  childComments: {
    type: Array,
    required: true
  }

});

module.exports = mongo.model('comment', ModelComment);

/*

idComment: 6,
    userId: 2,
    comment: "Comentario de respuesta padre",
    numberLikes: 7,
    numberDislikes: 3,
    timeComment: new Date(),
    childComments: []

*/