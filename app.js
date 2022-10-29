const express=require('express');
const bodyparser=require('body-parser');
const Tracker=require('./models/tracker_logic');
const sequelize=require('./util/trackerDB');
const router=require('./router/expense');

var cors=require('cors');
const { where } = require('sequelize');
// const { userInfo } = require('os');
const app=new express(); 
app.use(bodyparser.json({ extened:false }));
app.use(cors());

app.use('/expensive',router);

sequelize.sync()
.then(response=>{
    app.listen(4000);
}).catch(err=>console.log(err));
