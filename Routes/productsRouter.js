const express = require('express');
const ProductsService = require('../services/productsService');

const router = express.Router();
const service = new ProductsService();

// Consultar todos los productos
router.get('/', async (req, res) => {
    const products = await service.find(); 
    res.json(products);
});

// Consultar un producto especifico
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const products = await service.findOne(id); 
    res.json(products);
});

// Crear un producto
router.post('/', async (req, res) => {
    res.json(req.body);
    const body = req.body;
    await service.create(body);
});

// Actualizar producto
router.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.json(product);
});

// Eliminar producto
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await service.delete(id);
    res.json(id);
     

});

module.exports = router;