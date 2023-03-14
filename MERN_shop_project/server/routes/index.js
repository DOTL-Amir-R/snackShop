const express = require('express')
const router = express.Router()

exports.loginRoute = router.post("/login" , require("./../controller/auth/index.js").handelLoginUser)
exports.signInRoute = router.post("/signIn" , require("./../controller/auth/index.js").handelSignInUser)
exports.createProductRoute = router.post("/creatProduct" , require("./../controller/product/index.js").handelCreateProduct)
exports.showProductRoute = router.get("/showProduct" , require("./../controller/product/index.js").handelShowPtoduct)
exports.createReviewRoute = router.post("/createReview" , require("./../controller/review/index.js").handelCreateReview)
exports.showReviewRoute = router.get("/showReview" , require("./../controller/review/index.js").handelShoweReview)

