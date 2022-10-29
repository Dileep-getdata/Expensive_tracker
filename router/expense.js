const dataController=require('../controller/expeniveController');
const express=require('express');

const router=express.Router();


router.get('/get-expense',dataController.getUserDetails);
// Add user to database using sequelize
router.post('/add-expense',dataController.postAddedDetails);



// Editing the user details
router.get('/edit-idPost/:id',dataController.editUser);

router.put('/update-idPost/:id',dataController.updateUser);

// Deleting the user ID
router.delete('/delete-expenseId/:id',dataController.deleteUser);

module.exports=router;