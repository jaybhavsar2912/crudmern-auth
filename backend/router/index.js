const express = require('express');
const router = express.Router();
const Schema = require('../controller');
const auth = require('../middleware/auth');

router.post('/adduser', Schema.createSchema);
router.get('/getuser', Schema.getSchema);
router.get('/singleuser/:id', Schema.singleSchema);
router.delete('/deleteuser/:id', Schema.deleteSchema);
router.put('/updateuser/:id', Schema.updateSchema);

module.exports = router;
