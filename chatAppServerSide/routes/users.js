var express = require('express');
const userController = require('../controllers/user');
var router = express.Router();

router.post('/register', (req, res) => {
  const {name} = req.body;
  const user = userController.register(name);
  return res.send({user})
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  const user = userController.getUsers(name);
  return res.send({user})
});

module.exports = router;
