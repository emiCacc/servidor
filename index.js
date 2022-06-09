const express = require('express');
const conectarDB = require('./config/db');
const cors = require("cors");

//CREACION DEL SERVER
const app = express();

//Conectamos a la BD
conectarDB();
app.use(cors())

app.use(express.json()); //HABILITO LA POSIBILIDAD DE RECIBIR JSON EN LA APP

app.use('/api/productos', require('./routes/producto'));

app.listen(4000, () => {
    console.log('El servidor funciona perfectamente!')
})