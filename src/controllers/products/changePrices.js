import Product from "../../models/product";

export const changePrices = async (req, res) => {
    let response = ""
    if (req.user) {
      try {
        const allProducts = await Product.find()
        allProducts.forEach(async (product)=>{
            const updatedProduct = {
                price: parseFloat(product.price * (1+(req.params.percentaje / 100))).toFixed(2),
            }
            response = await product.updateOne(updatedProduct);
        })
      } catch (error) {
          console.log(error)
      }
    } else {
        console.log(error)
    }
    res.json(response);
  };