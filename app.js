const express = require('express');
const cors = require('cors'); // Requerir el paquete CORS
const routes = require('./router');

const app = express();

// Configurar CORS para permitir solicitudes del cliente en localhost:4200
app.use(cors({
  origin: 'http://localhost:4200'
}));

// Middleware para parsear el cuerpo de la solicitud en formato JSON
app.use(express.json());

// Configurar las rutas
app.use('/', routes);

// Puerto en el que se ejecutará el servidor
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor Express en funcionamiento en el puerto ${PORT}`);
});
