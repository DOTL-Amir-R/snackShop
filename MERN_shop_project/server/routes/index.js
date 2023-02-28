const express = require('express')
const router = express.Router()

exports.loginRoute = router.post("/login" , require("../controllers/auth").handelLoginUser)
exports.signInRoute = router.post("/signIn" , require("../controllers/auth").handelSignInUser)
