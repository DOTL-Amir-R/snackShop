const Product = require('./../../model/Product/index.js').Product;
const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');
const sharp = require('sharp');
const getPath = require('./../../utils/getPath.js').getPath; 
const handelShowPtoduct = async (req, res) => {
    const allProducts = Product.find({})
    res.status(200).json({products:allProducts})
}


const handelCreateProduct = async (req, res) => {
  console.log(req.body)
  if (!req.body.name) return res.status(400).json({ massage: "heyyyy noob Name kooo!?" })
  if (!req.body.price) return res.status(400).json({ massage: "heyyyy noob price kooo!?" })
  if (!req.body.count) return res.status(400).json({ massage: "heyyyy noob count kooo!?" })
  if (!req.body.category) return res.status(400).json({ massage: "heyyyy noob category kooo!?" })
  if (!req.body.weight) return res.status(400).json({ massage: "heyyyy noob weghit kooo!?" })
  if (!req.body.desc) return res.status(400).json({ massage: "heyyyy noob desc kooo!?" })
  if (!req.files.picture) return res.status(400).json({ massage: "heyyyy noob picture kooo!?" })
  const picture = req.files?.picture
  const checkImage = (data)=>
    data?.mimetype === "image/jpeg" ||
    data?.mimetype === "image/png" ||
    data?.mimetype === "image/jpg" 
  if(checkImage(picture)){
    await sharp(picture.data)
    .jpeg({quality: 60})
    .toFile(getPath(`public/uploads/${picture.md5 + picture.name}.jpg`))
    .catch((err)=>console.log(err))
} else {
    return res.status(400).json({errors:["please uplad photo by jpg or png format"]})
}
  const existProduct = await Product.findOne({ name: req.body.name })
  console.log(existProduct)
  if (existProduct) return res.status(400).json({ massage: "Product already exist" })
  const newProduct = new Product({ name: req.body.name , price: req.body.price , count: req.body.count , category: req.body.category , weghit: req.body.weghit , desc: req.body.desc , picture: picture ? picture.md5 + picture.name +".jpg" : ""})
  await newProduct.save()
  res.status(201).json({ massage: "Product saved sucessfully!?" })
}

module.exports = { handelShowPtoduct , handelCreateProduct }