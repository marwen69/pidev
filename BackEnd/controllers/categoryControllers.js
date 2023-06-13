const category = require('../models/category');

//create a category
exports.createCategory = (req, res, next) => {
    try{
        const newCategory = new category({
            name: req.body.name,
            description: req.body.description,
        });
        newCategory.save();
        res.status(201).json({
            message: 'Category created successfully!'
        });
    } catch (error) {
        res.status(500).json({
            error: error
        });
    }

}

//update a category
exports.updateCategory = (req, res, next) => {
    try {
        const updatedCategory = new category({
            _id: req.body.id,
            name: req.body.name,
            description: req.body.description,
        });
        category.updateOne({ _id: req.params.id }, updatedCategory).then(result => {
            res.status(200).json({
                message: 'Category updated successfully!'
            });
        });
    }catch (error) {
        res.status(500).json({
            error: error
        });
    }
}

//delete a category
exports.deleteCategory = (req, res, next) => {
    try {
        category.deleteOne({ _id: req.params.id }).then(result => {
            res.status(200).json({
                message: 'Category deleted successfully!'
            });
        });
    }catch (error) {
        res.status(500).json({
            error: error
        });
    }
}

//get all categories
exports.getAllCategories = (req, res, next) => {
    try {
        category.find().then(documents => {
            res.status(200).json({
                message: 'Categories fetched successfully!',
                categories: documents
            });
        });
    }catch (error) {
        res.status(500).json({
            error: error
        });
    }
}

//get a category
exports.getCategory = (req, res, next) => {
    try {
        category.findById(req.params.id).then(document => {
            res.status(200).json({
                message: 'Category fetched successfully!',
                category: document
            });
        });
    }catch (error) {
        res.status(500).json({
            error: error
        });
    }
}

//get a category by name
exports.getCategoryByName = (req, res, next) => {
    try {
        category.findOne({ name: req.params.name }).then(document => {
            res.status(200).json({
                message: 'Category fetched successfully!',
                category: document
            });
        });
    }catch (error) {
        res.status(500).json({
            error: error
        });
    }
}

