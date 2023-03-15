
const getComments = require('./Public/comments.public.route');
const test = require('./Public/home.public.route');
const test1 = require('./test.route');
const Users = require('./Public/users.public.route');
const CommentsPrivate = require('./Private/comments.private.route');
const UsersPrivate = require('./Private/users.private.route');

const Public = [
  getComments,
  test1,
  Users
];

const Private = [
  test,
  CommentsPrivate,
  UsersPrivate
]

module.exports = { Public, Private };