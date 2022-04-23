const express =require("express")

const productRouter = express.Router();
const productController = require("../controllers/products")

productRouter.route("/")
    .get(productController.getDetails)
    // .post()

module.exports= productRouter;