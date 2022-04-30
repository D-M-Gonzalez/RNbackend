import Product from "../../models/product";
import ProductMessage from "../../messages/productMessages";

//Controller used to update a product, and it's brand if necessary
export const updateProduct = async (req, res) => {
  const response = new ProductMessage("update"); //message object with initial message update
  if (req.query.id && req.user) {
    try {
      const foundProduct = await Product.findById(req.query.id);
      const updatedProduct = {
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
        subcategory: req.body.subcategory,
        description1: req.body.description1,
        description2: req.body.description2,
        tags: req.body.tags,
      };
      req.files.forEach((el)=>{
        newProduct.images.push("localhost:8000/images/" + el.fieldname + '_' + el.originalname)
      })
      await foundProduct.updateOne(updatedProduct);
      const productSaved = await foundProduct.save();
      if (productSaved) {
        response.setStatusMessage(200);
        response.setData(productSaved);
      } else {
        response.setStatusMessage(404);
      }
    } catch (error) {
      error.kind === "ObjectId" //returns different message for wrong id format and general server errors
        ? response.setStatusMessage(400)
        : response.setStatusMessage(500);
    }
  } else {
    response.setStatusMessage(406);
  }
  res.json(response); //returns the entire object with the stored status and data
};
