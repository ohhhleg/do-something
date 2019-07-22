var express = require('express');
var router = express.Router();

const {
  plus
} = require('../libs/db')

/*注册*/
router.post('/reg', async function (req, res, next) {
  let name2 = req.body.inputEmail;
  let psw2 = req.body.inputPassword;
  let data2 = await plus('user', {
    name: name2,
    psw: psw2
  })
  res.send(data2);
});
module.exports = router;