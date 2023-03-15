const ListModel = [
  {
    "_id": "6409090962688ef7678d565f",
    "idComment": 0,
    "userId": 1,
    "comment": "Comentario de prueba",
    "numberLikes": 10,
    "numberDislikes": 5,
    "timeComment": "2023-03-08T22:15:37.373Z",
    "childComments": [
      1,
      2
    ],
    "Usuario": {
      "_id": "640f895d4845da25c6738ee3",
      "idUser": 1,
      "username": "usuariotest",
      "gender": 1,
      "name": "test",
      "lastName": "Last Name test",
      "email": "test@test.com"
    }
  },
  {
    "_id": "640a72b12af83d7ee8a3ef77",
    "idComment": 1,
    "userId": 2,
    "comment": "Comentario Auto Incrementable",
    "numberLikes": 7,
    "numberDislikes": 3,
    "timeComment": "2023-03-09T23:58:41.740Z",
    "childComments": [],
    "Usuario": {
      "_id": "640fb1c968edd643d0f334cd",
      "idUser": 2,
      "username": "usuariotest autoincrement",
      "gender": 2,
      "name": "test",
      "lastName": "Last Name test",
      "email": "test@test.com"
    }
  },
  {
    "_id": "640f4baa4845da25c6738ee1",
    "idComment": 2,
    "userId": 2,
    "comment": "Comentario de respuesta hijo",
    "numberLikes": 7,
    "numberDislikes": 3,
    "timeComment": "2023-03-13T16:13:30.957Z",
    "childComments": [
      3
    ],
    "Usuario": {
      "_id": "640fb1c968edd643d0f334cd",
      "idUser": 2,
      "username": "usuariotest autoincrement",
      "gender": 2,
      "name": "test",
      "lastName": "Last Name test",
      "email": "test@test.com"
    }
  },
  {
    "_id": "640f4bbb4845da25c6738ee2",
    "idComment": 3,
    "userId": 2,
    "comment": "Comentario de respuesta hijo",
    "numberLikes": 7,
    "numberDislikes": 3,
    "timeComment": "2023-03-13T16:13:47.488Z",
    "childComments": [],
    "Usuario": {
      "_id": "640fb1c968edd643d0f334cd",
      "idUser": 2,
      "username": "usuariotest autoincrement",
      "gender": 2,
      "name": "test",
      "lastName": "Last Name test",
      "email": "test@test.com"
    }
  },
  {
    "_id": "640fad9968edd643d0f334cb",
    "idComment": 4,
    "userId": 2,
    "comment": "Comentario de respuesta hijo",
    "numberLikes": 7,
    "numberDislikes": 3,
    "timeComment": "2023-03-13T23:11:21.260Z",
    "childComments": [],
    "Usuario": {
      "_id": "640fb1c968edd643d0f334cd",
      "idUser": 2,
      "username": "usuariotest autoincrement",
      "gender": 2,
      "name": "test",
      "lastName": "Last Name test",
      "email": "test@test.com"
    }
  },
  {
    "_id": "640fae0a68edd643d0f334cc",
    "userId": 2,
    "comment": "Comentario de respuesta hijo",
    "numberLikes": 7,
    "numberDislikes": 3,
    "timeComment": "2023-03-13T23:13:14.543Z",
    "childComments": [],
    "idComment": 5,
    "Usuario": {
      "_id": "640fb1c968edd643d0f334cd",
      "idUser": 2,
      "username": "usuariotest autoincrement",
      "gender": 2,
      "name": "test",
      "lastName": "Last Name test",
      "email": "test@test.com"
    }
  }
];

module.exports = ListModel;