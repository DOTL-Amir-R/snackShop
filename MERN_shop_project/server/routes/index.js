const express = require('express')
const router = express.Router()

exports.loginRoute = router.post("/login" , require("./../controller/auth/index.js").handelLoginUser)
exports.signInRoute = router.post("/signIn" , require("./../controller/auth/index.js").handelSignInUser)
