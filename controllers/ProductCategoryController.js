const  sequelize = require('sequelize');
const db = require("../models/index");
const ProductCategory = db.ProductCategory
const {isEmpty} = require("../helpers/CommonHelper")
const path = require('path')

const createProductCategory = async (req,res) => {
    try {

        let filePath = "";
        let fileOriginalName = "";
        if(req.file){
            // filePath = path.resolve(__dirname, '..', req.file.path);
            filePath = req.file.path.replace(/\\/g, '/')
            fileOriginalName = req?.file?.originalname || "" 
        }
        const request = req.body || 'not found';
        const name = request?.name || "";
        const description = request?.description || "";
        const status = request?.status || "";

        if(isEmpty(name) || isEmpty(description) || isEmpty(status)){
            return res.status(400).json({
                status : 'failed',
                status_code : 400,
                errors : ['All Fields are required.']
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
                status : 'error',
                status_code : 400,
                errors : ['Product Category Already Exists!']
            })
        }
        categroyData = await ProductCategory.create({
            name:name,
            description:description,
            status:status,
            image:filePath,
            image_original_name:fileOriginalName
        }).then((categroyData) => {
           return  res.status(200).json({
                'status':'success',
                'status_code' : 200,
                'data':categroyData,
                'mssg':'Category created successfully!',
                'file':req?.file
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
            'error':error
        });
    }
}

const getAllProductCategories = async(req, res) =>{
    try {
        let categoriesData  = await ProductCategory.findAll();
        if(categoriesData.length){
            categoriesData =  categoriesData.map((item) =>{
                const image =  `${req.protocol}://${req.get('host')}/${item.image}`;
                item.image = image;
                return item;
                
            })
        }
        return res.json({
            'categoryData':categoriesData,
            'status':'success',
            'status_code':200,
            'mssg':'Categories Data Fetched Successuflly'
        });
    } catch (error) {
       console.log('error',error) 
    }
}

const getSingleProductCategoryData = async(req, res) =>{
    try {
        const id = req?.params.id || "";
        // console.log('paren',req?.params.id);
        // console.log('query',req?.query);
        // console.log('body',req?.body);

        const categoriesData  = await ProductCategory.findOne({
            where:{
                id:id
            }
        });
        let messg = "Category Not Found!";
        if(categoriesData){
            messg = 'Categories Data Fetched Successuflly';
        }
        return res.json({
            'categoryData':categoriesData,
            'status':'success',
            'status_code':200,
            'mssg':messg
        });
    } catch (error) {
       console.log('error',error) 
    }
}

const deleteCategory = async(req, res) =>{
    try {
        const id = req?.params.id || "";
        // console.log('paren',req?.params.id);
        // console.log('query',req?.query);
        // console.log('body',req?.body);

        const categoriesData  = await ProductCategory.destroy({
            where:{
                id:id
            }
        });
        let messg = "Category Not Found!";
        if(categoriesData){
            messg = 'Categories Deleted Successufully';
        }
        return res.json({
            'status':'success',
            'status_code':200,
            'mssg':messg
        });
    } catch (error) {
       console.log('error',error) 
    }
}

const updateSingleCategory = async(req, res) =>{
    try{
        let filePath = "";
        let fileOriginalName = "";
        if(req.file){
            filePath = req.file.path.replace(/\\/g, '/')
            fileOriginalName = req?.file?.originalname || "" 
        }
        const request = req.body || 'not found';
        const name = request?.name || "";
        const description = request?.description || "";
        const status = request?.status || "";
        const categoryId = request?.id || "";

        if(isEmpty(name) || isEmpty(description) || isEmpty(status) || isEmpty(categoryId)){
            return res.status(400).json({
                status : 'failed',
                status_code : 400,
                errors : ['All Fields are required.']
            });
        }
        const categoryData = await ProductCategory.findOne({
            where:{
                id:categoryId
            }
        });

        if(!categoryData){
            return res.status(400).json({
                'status':'failed',
                'status_code':400,
                'errors':['Category Not found!']

            });
        }
        categoryData.name = name;
        categoryData.description = description;
        categoryData.status = status;
        if(!isEmpty(fileOriginalName)){
            categoryData.image = filePath;
            categoryData.image_original_name= fileOriginalName
        }
        const updatedCategoryData = await categoryData.save();
        if(updatedCategoryData){
            return res.json({
                'status' : 'success',
                'status_code':200,
                'mssg' :"Category Updated Successfully!"
            })
        }


    }catch(e){
        console.log('error while updating category',e);
        return res.json({
            'status' : 'failed',
            'status_code':401,
            'errors':['Something went wrong']
        })
    }
}

module.exports = {
    createProductCategory,
    getAllProductCategories,
    getSingleProductCategoryData,
    deleteCategory,
    updateSingleCategory
}