const { Review } = require("../../model/review");
const { User } = require("../../model/User");
const JWT = require('jsonwebtoken');

const handelCreateReview = async (req , res) => {
    if (!req.headers.authorization) return res.status(404).json({ massage: "you are not login to your account" })
    if(!req.body.title) return res.status(400).json({massage : "bad request: no title "})
    if(!req.body.rating) return res.status(400).json({massage : "bad request: no rating "})
    const decodedToken = JWT.decode( req.headers.authorization, process.env.SECRETKEY )
    const user = await User.findOne({_id : decodedToken.userId})
    const newReview = new Review({ title: req.body.title , name : user.firstName , picture: "" , desc: req.body.desc , rating: req.body.rating , createdBy: req.body.createdBy , nameOfProduct: req.body.nameOfProduct })
    await newReview.save()
    res.status(201).json({massage : "review created succesfully"})
} 

const handelShoweReview = async(req , res) => {
      const allReviews = await Review.find({nameOfProduct: req.query.productName})
      res.status(200).json({products:allReviews})
} 

module.exports = { handelShoweReview , handelCreateReview }