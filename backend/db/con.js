const mongoose = require('mongoose');
const ConnectDB = () => {
  mongoose
    .connect(
      'mongodb+srv://jayadmin:jayadmin@cluster0.ailgx05.mongodb.net/CRUD?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log('Database Connected Successfully!!!!!!'))
    .catch((err) => {
      console.log('somthing went wrong', err);
    });
};

module.exports = ConnectDB;
