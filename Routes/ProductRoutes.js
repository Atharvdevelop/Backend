const  {CreateProduct, GetAllProducts, UpdateProduct,GetAllProductsById,DeleteProduct} = require('../Controller/ProductController');
const express = require('express');
const router = express.Router();
router.post('/productcreate',CreateProduct);
router.get('/productall',GetAllProducts);
router.get('/:id',GetAllProductsById);
router.put('/:id',UpdateProduct);
router.delete('/:id',DeleteProduct);
module.exports = router;