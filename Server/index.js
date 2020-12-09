const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
var celeb = require('../controller/celebController')

var app = express()
app.use(bodyParser.json())
app.use(cors({origin:'*'}))

app.listen(3000,()=>{console.log("Server started at 3000 port")})

app.use('/celebrities',celeb)