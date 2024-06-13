const express = require("express")
const router = express.Router();

router.route("/login").get((req,res) => {
    return res.json({
        'status':'success',
        'status_code':200,
        'mssg' :"Login Successfully"
    });
});


module.exports = router;