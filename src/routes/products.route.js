const express = require('express');
const router = express.Router();
const validToken = require('../middlewares/token.middleware');
const productController = require('../controllers/products.controller');

// get all data
router.get('/', validToken, productController.all);

// create data
router.post('/', validToken, productController.save);

// find data by id
router.get('/:id', validToken, productController.findById);

// update data by id
router.patch('/:id', validToken, productController.update);

// delete data by id
router.delete('/:id', validToken, productController.remove);

module.exports = router;