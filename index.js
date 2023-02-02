require('dotenv').config();

const express = require('express');
const app = express();

const PORT = process.env.SERVER_PORT;
//  definir rutas
app.get('/', (req, res) => {
//  res.send -> response para retornar
res.send('Hola. Primer servidor en express');
});

// se le indica que debe escuchar en un puerto especifico
app.listen(PORT, () =>{
// se utiliza un log solo para verificar, se debe eliminar, porque en producción es un error
console.log(`Mi port ${PORT}`);
});
