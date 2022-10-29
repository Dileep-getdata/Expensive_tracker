const express=require('express');
const bodyparser=require('body-parser');
const Tracker=require('./models/tracker_logic');
const sequelize=require('./util/trackerDB');
const dataController=require('./controller/expeniveController');

var cors=require('cors');
const { where } = require('sequelize');
// const { userInfo } = require('os');
const app=new express(); 
app.use(bodyparser.json({ extened:false }));
app.use(cors());

app.get('/expensive/get-expense',dataController.getUserDetails);
// Add user to database using sequelize
app.post('/expensive/add-expense',dataController.postAddedDetails);



// Editing the user details
app.get('/expensive/edit-idPost/:id',dataController.editUser);

app.put('/expensive/update-idPost/:id',dataController.updateUser);

// Deleting the user ID
app.delete('/expensive/delete-expenseId/:id',dataController.deleteUser);



sequelize.sync()
.then(response=>{
    app.listen(4000);
}).catch(err=>console.log(err));
