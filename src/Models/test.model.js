const ListModel = [
  {
    "_id": "6409090962688ef7678d565f",
    "idComment": 0,
    "userId": 1,
    "comment": "Comentario Editado ",
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
      "name": "new admin name",
      "lastName": "admin last name",
      "email": "adming@admin.com"
    }
  },
  {
    "_id": "640a72b12af83d7ee8a3ef77",
    "idComment": 1,
    "userId": 1,
    "comment": "Comentario Auto Incrementable",
    "numberLikes": 7,
    "numberDislikes": 3,
    "timeComment": "2023-03-09T23:58:41.740Z",
    "childComments": [
      0
    ],
    "Usuario": {
      "_id": "640f895d4845da25c6738ee3",
      "idUser": 1,
      "username": "usuariotest",
      "gender": 1,
      "name": "new admin name",
      "lastName": "admin last name",
      "email": "adming@admin.com"
    }
  },
  {
    "_id": "640f4baa4845da25c6738ee1",
    "idComment": 2,
    "userId": 1,
    "comment": "Comentario de respuesta hijo",
    "numberLikes": 7,
    "numberDislikes": 3,
    "timeComment": "2023-03-13T16:13:30.957Z",
    "childComments": [],
    "Usuario": {
      "_id": "640f895d4845da25c6738ee3",
      "idUser": 1,
      "username": "usuariotest",
      "gender": 1,
      "name": "new admin name",
      "lastName": "admin last name",
      "email": "adming@admin.com"
    }
  },
  {
    "_id": "6416289c270cdbbbd89cbc6a",
    "idComment": 4,
    "userId": 3,
    "comment": "respuesta desde otro usuario",
    "numberLikes": 0,
    "numberDislikes": 0,
    "timeComment": "2023-03-18T21:09:13.561Z",
    "childComments": [
      0
    ],
    "__v": 0,
    "Usuario": {
      "_id": "6414919b41baefe9c8e1fba7",
      "idUser": 3,
      "username": "usuarionuevo",
      "gender": 1,
      "name": "Juanito",
      "lastName": "Alcachofa",
      "email": "juanitoalcachofa@gmail.com",
      "__v": 0
    }
  },
  {
    "_id": "641628d1270cdbbbd89cbc70",
    "idComment": 5,
    "userId": 3,
    "comment": "respuesta",
    "numberLikes": 0,
    "numberDislikes": 0,
    "timeComment": "2023-03-18T21:10:22.899Z",
    "childComments": [],
    "__v": 0,
    "Usuario": {
      "_id": "6414919b41baefe9c8e1fba7",
      "idUser": 3,
      "username": "usuarionuevo",
      "gender": 1,
      "name": "Juanito",
      "lastName": "Alcachofa",
      "email": "juanitoalcachofa@gmail.com",
      "__v": 0
    }
  },
  {
    "_id": "641629a2d7f4056deb52a30f",
    "idComment": 6,
    "userId": 1,
    "comment": "comentario de respuesta",
    "numberLikes": 0,
    "numberDislikes": 0,
    "timeComment": "1970-01-20T10:21:03.625Z",
    "childComments": [],
    "__v": 0,
    "Usuario": {
      "_id": "640f895d4845da25c6738ee3",
      "idUser": 1,
      "username": "usuariotest",
      "gender": 1,
      "name": "new admin name",
      "lastName": "admin last name",
      "email": "adming@admin.com"
    }
  }
];

module.exports = ListModel;