const express = require('express');
const UsersService = require('../services/usersService');

const router = express.Router();

const service = new UsersService();

// Consultar todos los usuarios
router.get('/', async (req, res, next) => {
    try{
        const users = await service.find(); 
        res.json(users);
    } catch (error) {
        next(error);
    }
});

// Consultar un usuario especifico
router.get('/:id', async (req, res, next) => {
    try{
        const { id } = req.params;
        const user = await service.findOne(id); 
        res.json(user);
    } catch (error) {
        next(error);
    }
});

// Crear un usuario
router.post('/', async (req, res, next) => {
    try{
        res.json(req.body);
        const body = req.body;
        await service.create(body);
    } catch (error) {
        next(error);
    }
});

// Actualizar usuario
router.patch('/:id', async (req, res, next) => {
    try{
        const { id } = req.params;
        const body = req.body;
        const product = await service.update(id, body);
        res.json(product);
    } catch (error) {
        next(error);
    }
});

// Eliminar usuario
router.delete('/:id', async (req, res, next) => {
    try{
        const { id } = req.params;
        await service.delete(id);
        res.json(id);
    } catch (error) {
        next(error);
    }
})

module.exports = router;