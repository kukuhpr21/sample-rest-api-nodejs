const express = require('express');
const router = express.Router();
const authorization = require('../middleware/authorization.middleware');
const productController = require('../controllers/products.controller');

// get all data
router.get('/', authorization, productController.all);

// create data
router.post('/', authorization, productController.save);

// find data by id
router.get('/:id', authorization, productController.findById);

// update data by id
router.patch('/:id', authorization, productController.update);

// delete data by id
router.delete('/:id', authorization, productController.remove);

module.exports = router;