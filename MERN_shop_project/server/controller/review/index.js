const { Review } = require("../../model/review");

const handelCreateReview = async (req , res) => {
    if (!req.headers.authorization) return res.status(404).json({ massage: "you are not login to yuor acount" })
    if(req.body.title) return res.status(400).json({massage : "bad request: no title "})
    if(req.body.rating) return res.status(400).json({massage : "bad request: no rating "})
    const newReview = new Review({ title: req.body.title , desc: req.body.desc , rating: req.body.rating , createdBy: req.body.createdBy , nameOfProduct: req.body.nameOfProduct })
    await newReview.save()
    res.status(201).json({massage : "review created succesfully"})
} 

const handelShoweReview = async(req , res) => {
      const allProducts = await Product.find({nameOfProduct: req.body.nameOfProduct})
      res.status(200).json({products:allProducts})
} 

module.exports = { handelShoweReview , handelCreateReview }