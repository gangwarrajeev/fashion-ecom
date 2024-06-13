const  sequelize = require('sequelize');
const db = require("../models/index");
const ProductCategory = db.ProductCategory
const {isEmpty} = require("../helpers/CommonHelper")


const createProductCategory = async (reqs,res) => {
    try {
        const request = reqs.body || 'not found';
        const name = request?.name || "";
        const description = request?.description || "";
        const status = request?.status || "";

        if(isEmpty(name) || isEmpty(description) || isEmpty(status)){
            return res.status(400).json({
                'status' :'failed',
                'status_code':400,
                'error':'All Fields are required.'
            });
        }
        console.log('ProductCategorySchema',ProductCategory)
        const categoryExists = await ProductCategory.count({
            where: {
                name: name,
            },
          }).catch((err) =>{
            console.log('error',err);
          });
        if(categoryExists>0){
           return  res.status(401).json({
                'status' :'error',
                'status_code':400,
                'data':'Product Category Already Exists!'
            })
        }
        categroyData = await ProductCategory.create({
            name:name,
            description:description,
            status:status
        }).then((categroyData) => {
           return  res.status(200).json({
                'status':'success',
                'status_code' : 200,
                'data':categroyData,
                'mssg':'Category created successfully!',
            });
        }).catch((error) => {
            return res.status(400).json({
                'status' :error,
                'status_code':400,
                'data':error
            });
        })
        
    } catch (error) {
        console.log('error while registering the user',error);
        return res.status(500).json({
            'status' :error,
            'status_code':500,
            'data':error
        });
    }
}

module.exports = {
    createProductCategory
}