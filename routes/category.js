const express = require('express');
const router = express.Router();
const {createProductCategory,getAllProductCategories,getSingleProductCategoryData,deleteCategory,updateSingleCategory} = require("../controllers/ProductCategoryController");
const upload= require('../services/imageUpload');

router.route("/").get(getAllProductCategories)
router.post("/",upload.single('product_category_img'),createProductCategory);
router.put("/:id",upload.single('product_category_img'),updateSingleCategory);
router.get('/:id',getSingleProductCategoryData);
router.delete('/:id',deleteCategory)
module.exports = router;