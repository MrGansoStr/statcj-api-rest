const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const ApiRoutes = require('./routes/AllRoutes');
const ValidToken = require('./Guards/Token.guard');
require('./db/db.connect')

const corsOptions = {
  origin: true,
  credentials: true
};

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));
app.get('/', async (req, res) => {
  return res.status(200).send({message: "Welcome to API REST STATCJ, Public Routes are: ", routes: ["/public-api/getusers","/public-api/register", "/public-api/login", "/public-api/getcomments", "/public-api/recoveryemail"]});
});
app.use('/public-api', ApiRoutes.Public);
app.use('/private-api', ValidToken, ApiRoutes.Private);
app.use('*' ,(req, res, next) => {
  res.status(404).send({message: "NOT FOUND API"});
});


const port = process.env.PORT || 4000;

app.listen(port);
console.log(`Listening on PORT ${port}`);
