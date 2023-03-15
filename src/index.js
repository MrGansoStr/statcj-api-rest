const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const ApiRoutes = require('./routes/AllRoutes');
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
app.use('/api', ApiRoutes.Public);
app.use('/api', ApiRoutes.Private);

const port = process.env.PORT || 4000;

app.listen(port);
console.log(`Listening on PORT ${port}`);
