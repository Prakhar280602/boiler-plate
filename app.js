//config dotenv
require('dotenv').config({path:"./.env"});

const path=require('path');
const express = require('express');
const app = express();

// connect to database
require("./models/database").connectDB();

const userRouters = require("./routers/user.routes");


//configure views
app.set('views engine','ejs');
app.set('views',path.join(__dirname, 'views'));

app.use('/user',"userRouters");


// server
app.listen(process.env.PORT, () => {
    console.log(`Server is running`);
});
