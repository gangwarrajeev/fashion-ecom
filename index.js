const express = require("express");
const cors = require('cors')
const { validationResult } = require('express-validator')
const path = require("path");
const multer = require('multer')
const app = express();
const morgan = require('morgan')
const indexRouter = require("./routes/index");
const {erorrHandler} = require("./errrorHandler/ErrorHandler")

app.use(morgan('dev'));
app.use(cors()) 
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// app.use(erorrHandler());
app.use('/',indexRouter)

// app.get("/", (req, res) => {
//     console.log('request hitteeds');
//     return res.send("Hello")
//     // res.download
// })
const port = process.env.port || 9000;
app.listen(port,()=>{
    console.log("app is runnig on port no "+port);
})