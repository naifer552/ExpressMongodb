const express = require('express');
const ProductsService = require('../services/productsService');

const router = express.Router();
const service = new ProductsService();

// Consultar todos los productos
router.get('/', async (req, res, next) => {
    try {
        const products = await service.find(); 
        res.json(products);
    } catch (error) {
        next(error);
    }
});

// Consultar un producto especifico
router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const products = await service.findOne(id); 
        res.json(products);
    } catch (error) {
        next(error)        
    }
});

// Crear un producto
router.post('/', async (req, res, next) => {
    try {
        res.json(req.body);
        const body = req.body;
        await service.create(body);
    } catch (error) {
        next(error)
        
    }
});

// Actualizar producto
router.patch('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const product = await service.update(id, body);
        res.json(product);
    } catch (error) {
        next(error)
        
    }
});

// Eliminar producto
router.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        await service.delete(id);
        res.json(id);
    } catch (error) {
        next(error);
    }
});

module.exports = router;