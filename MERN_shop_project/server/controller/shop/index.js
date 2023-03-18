const { Product } = require("../../model/Product");

const handleSortByProduct = async (req, res) => {
  // console.log(req.body.sortBy)
  console.log(req?.body)
  const sortByMethod = req?.body?.sortBy;
  const categoryMethod = req?.body?.category;
  const allProducts = await Product.find({});
  switch (categoryMethod) {
    case "vegeterian":
      const vegeterianCategoryArray = [];
      const vegeterianCategoryFiltered =  allProducts.map( (p1) => {
        if ([p1.category].includes("vegeterian")) {
          vegeterianCategoryArray.push(p1);
        }
      });
      if (vegeterianCategoryArray.length > 0) {
        return  res.status(200).json(vegeterianCategoryArray);

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

        return res.status(200).json(freeSugerCategoryArray);

      } else {
        return res.status(404).json({ message: "No product was Found!" });
      }
    case "Heavy suger":
      const heavySugerCategoryArray = [];
      const heavySugerCategoryFiltered = allProducts.map((p1) => {
        if ([p1.category].includes("Heavy suger")) {
        return  heavySugerCategoryArray.push(p1);
        }
      });
      if (heavySugerCategoryArray.length > 0) {

        return res.status(200).json(heavySugerCategoryArray);

      } else {
        return res.status(404).json({ message: "No product was Found!" });
      }

  }

  switch (sortByMethod) {
    case "cheapest":
      const firstFilteredDataCheapest =req.body.data
            console.log(firstFilteredDataCheapest)
      const sortedProduct = firstFilteredDataCheapest.sort((p1, p2) =>
        p1.price > p2.price ? 1 : p1.price < p2.price ? -1 : 0
      );
      return res.status(200).json({ sortedProduct });
    case "expensive":
      const firstFilteredDataExpensive =req.body.data
      const sortedProductExpensive = firstFilteredDataExpensive.sort((p1, p2) =>
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
