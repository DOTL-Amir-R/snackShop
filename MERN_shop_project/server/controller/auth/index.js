const User = require('./../../model/User/index.js').User;
const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');
const handelLoginUser = async (req, res) => {
  if (!req.body.email) return res.status(400).json({ massage: "heyyyy noob emailet kooo!?" })
  if (!req.body.password) return res.status(400).json({ massage: "heyyyy noob passwordet kooo!?" })
  const existUser = await User.findOne({ email: req.body.email })
  const { password: userPassword, email: userEmail, _id: userId } = existUser
  if (!existUser) return res.status(400).json({ massage: "you are not sign in yet" })
  bcrypt.compare(req.body.password.toString(), existUser.password, function (err, result) {
    if (!result) return res.status(400).json({ massage: "passwords and email are not matche" })
    const token = JWT.sign({userEmail , userId} , process.env.SECRETKEY)
    return res.status(201).json({ massage: "loging in was sucessfully" , token })
  })
}

const handelSignInUser = async (req, res) => {
  if (!req.body.email) return res.status(400).json({ massage: "heyyyy noob emailet kooo!?" })
  if (!req.body.firstName) return res.status(400).json({ massage: "heyyyy noob first namet kooo!?" })
  if (!req.body.lastName) return res.status(400).json({ massage: "heyyyy noob last namet kooo!?" })
  if (!req.body.password) return res.status(400).json({ massage: "heyyyy noob passwordet kooo!?" })
  const existUser = await User.findOne({ email: req.body.email })
  if (existUser) return res.status(400).json({ massage: "email already exist" })
  const salt = await bcrypt.genSalt(10)
  const hashedPass = await bcrypt.hash(req.body.password.toString(), salt)
  const newUser = new User({ email: req.body.email, firstName: req.body.firstName , lastName: req.body.lastName, haveAllergy: req.body.haveAllergy , password: hashedPass })
  await newUser.save()
  res.status(201).json({ massage: "user saved sucessfully!?" })
}

module.exports = { handelLoginUser, handelSignInUser }