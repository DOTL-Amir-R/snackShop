const { Product } = require("../../model/Product");

const handleSortByProduct= async (req,res)=>{
    console.log(req.body.sortBy)
    const sortByMethod = req.body.sortBy
    const allProducts = await Product.find({})
    
    switch (sortByMethod) {
        case 'cheapest':
            const sortedProduct = allProducts.sort((p1, p2) => (p1.price > p2.price) ? 1 : (p1.price < p2.price) ? -1 : 0)
            // console.log(sortedProduct)
            return res.status(200).json({sortedProduct});
        case 'expensive':
            const sortedProductExpensive = allProducts.sort((p1, p2) => (p1.price < p2.price) ? 1 : (p1.price > p2.price) ? -1 : 0)
            // console.log(sortedProductExpensive)
            return res.status(200).json({sortedProductExpensive});
        // case 'heavierWeight':
        //     const sortedProductHeavierWeight = allProducts.sort((p1, p2) => (p1.price < p2.price) ? 1 : (p1.price > p2.price) ? -1 : 0)
            // console.log(sortedProductHeavierWeight)
            // return res.status(200).json({sortedProductHeavierWeight});
        default:
            break;
    }
}

module.exports = {
    handleSortByProduct
}