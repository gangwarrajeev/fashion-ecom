const  sequelize = require('sequelize');
const db = require("../models/index");
const bcrypt = require('bcrypt');

const UserSchema = db.users
const {isEmpty} = require("../helpers/CommonHelper")
 const getAllUsers = async (reqs,res) => {
    try {
        
      
        return res.status(200).json({
            'status':'success',
            'status_code' : 200,
            'data':[],
            'mssg':'Users Data'
        });
    } catch (error) {
        console.log('error while registering the user',error);
    }
}
const createUser = async (reqs,res) => {
    try {
        const request = reqs.body || 'not found';
        const userName = request?.user_name || "";
        const userEmail = request?.user_email || "";
        const userMobile = request?.user_mobile || "";
        const userPassword = request?.password || "";
        const userDOB = request?.dob || "";
        if(isEmpty(userName) || isEmpty(userEmail) || isEmpty(userMobile) || isEmpty(userEmail) || isEmpty(userPassword)){
            res.status(400).json({
                'status' :'failed',
                'status_code':400,
                'error':'All Fields are required.'
            });
        }
        const userEmailCount = await UserSchema.count({
            where: {
                user_email: userEmail,
            },
          });
        if(userEmailCount>0){
           return  res.status(401).json({
                'status' :'error',
                'status_code':400,
                'data':'Email Already Exists!'
            })
        }
        userData = await UserSchema.create({
            user_name:userName,
            user_email:userEmail,
            user_mobile:userMobile,
            password:userPassword,
            dob:userDOB
        }).then((user) => {
           return  res.status(200).json({
                'status':'success',
                'status_code' : 200,
                'data':user,
                'mssg':'User created successfully!',
            });
        }).catch((error) => {
            return res.status(400).json({
                'status' :'error',
                'status_code':400,
                'data':error
            });
        })
        
    } catch (error) {
        console.log('error while registering the user',error);
        return res.status(500).json({
            'status' :'error',
            'status_code':500,
            'data':error
        });
    }
}
const getUser = async (reqs,res) => {
    try {
        
        res.status(200).json({
            'status':'success',
            'status_code' : 200,
            'data':[],
            'mssg':'User Data!'
        });
    } catch (error) {
        console.log('error while registering the user',error);
    }
}
const updateUser = async (reqs,res) => {
    try {
        
        res.status(200).json({
            'status':'success',
            'status_code' : 200,
            'data':[],
            'mssg':'User updated successfully!'
        });
    } catch (error) {
        console.log('error while registering the user',error);
    }
}
const deleteUser = async (reqs,res) => {
    try {
        
        return res.status(200).json({
            'status':'success',
            'status_code' : 200,
            'data':[],
            'mssg':'User Deleted successfully!'
        });
    } catch (error) {
        console.log('error while registering the user',error);
    }
}
const uploadProfilePicture = async (reqs,res) => {
    try {
        
        if (!reqs.file) {
            console.log("No file received");
            return res.send({
              success: false
            });
        
          }
        return res.status(200).json({
            'status':'success',
            'status_code' : 200,
            'data':[],
            'mssg':'User Profile Updated successfully!'
        });
    } catch (error) {
        console.log('error while registering the user',error);
        return res.status(500).json({
            'status':'failed',
            'status_code' : 500,
            'error':error,
        });

    }
}

module.exports = {
    getAllUsers,
    createUser,
    getUser,
    updateUser,
    deleteUser,
    uploadProfilePicture
}