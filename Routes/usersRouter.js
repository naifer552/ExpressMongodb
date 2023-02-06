const express = require('express');
const UsersService = require('../services/usersService');

const router = express.Router();

const service = new UsersService();

// Consultar todos los usuarios
router.get('/', async (req, res) => {
    const users = await service.find(); 
    res.json(users);
});

// Consultar un usuario especifico
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const user = await service.findOne(id); 
    res.json(user);
});

// Crear un usuario
router.post('/', async (req, res) => {
    res.json(req.body);
    const body = req.body;
    await service.create(body);
});

// Actualizar usuario
router.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.json(product);
});

// Eliminar usuario
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await service.delete(id);
    res.json(id);
})

module.exports = router;