const { Product } = require("../../model/Product");

const handleSortByProduct = async (req, res) => {
  // console.log(req.body.sortBy)
  const sortByMethod = req.body.sortBy;
  const categoryMethod = req.body.category;
  const allProducts = await Product.find({});
  let firstFilteredArray = []
  switch (categoryMethod) {
    case "vegeterian":
      const vegeterianCategoryArray = [];
      const vegeterianCategoryFiltered = allProducts.map((p1) => {
        if ([p1.category].includes("vegeterian")) {
          vegeterianCategoryArray.push(p1);
        }
      });
      if (vegeterianCategoryArray.length > 0) {
        firstFilteredArray = vegeterianCategoryArray
        return res.status(200).json(vegeterianCategoryArray);
      } else {
        return res.status(404).json({ message: "No product was Found!" });
      }

    case "Free suger":
      const freeSugerCategoryArray = [];
      const freeSugerCategoryFiltered = allProducts.map((p1) => {
        if ([p1.category].includes("free suger")) {
          freeSugerCategoryArray.push(p1);
        }
      });
      if (freeSugerCategoryArray.length > 0) {
        firstFilteredArray = freeSugerCategoryArray
        return res.status(200).json(freeSugerCategoryArray);
      } else {
        return res.status(404).json({ message: "No product was Found!" });
      }
    case "Heavy suger":
      const heavySugerCategoryArray = [];
      const heavySugerCategoryFiltered = allProducts.map((p1) => {
        if ([p1.category].includes("Heavy suger")) {
          heavySugerCategoryArray.push(p1);
        }
      });
      if (heavySugerCategoryArray.length > 0) {
        firstFilteredArray = heavySugerCategoryArray
        return res.status(200).json(heavySugerCategoryArray);
      } else {
        return res.status(404).json({ message: "No product was Found!" });
      }
  }

  switch (sortByMethod) {
    case "cheapest":
      const sortedProduct = allProducts.sort((p1, p2) =>
        p1.price > p2.price ? 1 : p1.price < p2.price ? -1 : 0
      );

      return res.status(200).json({ sortedProduct });
    case "expensive":
      const sortedProductExpensive = allProducts.sort((p1, p2) =>
        p1.price < p2.price ? 1 : p1.price > p2.price ? -1 : 0
      );

      return res.status(200).json({ sortedProductExpensive });

    default:
      break;
  }
};

module.exports = {
  handleSortByProduct,
};
