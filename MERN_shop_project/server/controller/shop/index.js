const { Product } = require("../../model/Product");

const handleSortByProduct= async (req,res)=>{
    console.log(req.body.sortBy)
    const sortByMethod = req.body.sortBy
    const allProducts = await Product.find({})
    
    switch (sortByMethod) {
        case 'expensive':
            allProducts.sort()
            break;
    
        default:
            break;
    }
}

module.exports = {
    handleSortByProduct
}