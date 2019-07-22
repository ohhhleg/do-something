var express = require('express');
var router = express.Router();

const {
  find
} = require('../libs/db')

/*登录*/
router.post('/login', async function (req, res, next) {
  let names = req.body.inputEmail;
  let psws = req.body.inputPassword;
  let data = await find('user', {
    //第2种.通过用户名和密码共同查询到的数据的返回长度，判断是否登录成功
    name: names,
    psw: psws
  })
  res.json(data);
});
module.exports = router;