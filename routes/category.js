const express = require('express');
const router = express.Router();
const {createProductCategory} = require("../controllers/ProductCategoryController");

router.route("/").get((req, res)=>{
    return res.send({
        'status':'success',
        'status_code':200,
        'message':'category called successsfully'
    });
})
router.post("/",createProductCategory);

module.exports = router;