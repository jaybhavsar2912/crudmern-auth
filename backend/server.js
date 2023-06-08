const express = require('express');
const app = express();
const ConnectDB = require('./db/con');
const cors = require('cors');
const router = require('./router');
const Router = require('./router/user');
const port = 8080;
app.use(express.json());
app.use(cors());
ConnectDB();

app.use((req, res, next) => {
  console.log('HTTP Method - ' + req.method + ',URL - ' + req.url);
  next();
});

app.use('/', router);
app.use('/', Router);
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
