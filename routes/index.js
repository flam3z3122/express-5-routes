const express =require("express");

const router =express.Router(); // which allows ypu to create child routes or end points for the api
const productRouter = require("./products")

router.use("/products",productRouter)    ///append the child routes.

module.exports =router