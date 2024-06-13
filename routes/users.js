const express = require('express');
const router = express.Router();
const multer = require('multer');
// const {upload} = require("../middleware/upload")
const {getAllUsers,createUser,getUser,updateUser,deleteUser,uploadProfilePicture} = require("../controllers/UserController");

router.get('/',getAllUsers);
router.post('/',createUser);
router.get('/:id',getUser);
router.put('/:id',updateUser);
router.delete('/:id',deleteUser);

const upload = multer({
    dest: 'public/images',
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`)
    },
    limits: {
      fileSize: Infinity // Changed this to allow file upload
    },
    fileFilter: (req, file, cb) => {
      if (!file.mimetype.startsWith('image/')) {
        return cb(new Error('Please upload an image'))
      }
      cb(null, true)
    }
  })
router.post('/upload-profile',upload.single('file'),uploadProfilePicture)

module.exports = router;