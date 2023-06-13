const express = require('express');
const router = express.Router();

const categoryController = require('../controllers/categoryControllers');


//create a category
router.post('/createCategory', categoryController.createCategory);

//update a category
router.put('/updateCategory/:id', categoryController.updateCategory);

//delete a category
router.delete('/deleteCategory/:id', categoryController.deleteCategory);

//get all categories
router.get('/getAllCategories', categoryController.getAllCategories);

module.exports = router;