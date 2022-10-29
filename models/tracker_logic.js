const Sequelize=require('sequelize');

const sequelize=require('../util/trackerDB');

const Tracker=sequelize.define('expenseTracker',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    amount:Sequelize.STRING,

    category:Sequelize.STRING,        
    
    description:Sequelize.STRING,
        
    
});
module.exports=Tracker;