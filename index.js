require('dotenv').config();
require('./database');
const express = require('express');
const routerApi = require('./Routes');
const app = express();
app.use(express.json());
const PORT = process.env.SERVER_PORT;

routerApi(app);

// se le indica que debe escuchar en un puerto especifico
app.listen(PORT, () =>{
// se utiliza un log solo para verificar, se debe eliminar, porque en producción es un error
console.log(`Mi port ${PORT}`);
});
