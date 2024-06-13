const express = require('express');
const router = express.Router()

const userRoutes = require('./users')
const categroyRoutes = require("./category");
const authRoutes = require("./auth")
// router.use(userRoutes)
router.use("/api/users/",userRoutes);
router.use("/api/product-category/",categroyRoutes);
router.use("/auth",authRoutes);
module.exports = router