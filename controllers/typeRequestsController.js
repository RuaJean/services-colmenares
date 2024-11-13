const dbConnection = require('../database/db');

// Controlador para traer todos los tipos de peticiones
function getTypeRequests(req, res) {
    dbConnection.query('SELECT * FROM tipo_peticiones', (err, resultados) => {
      if (err) {
        console.error('Error al ejecutar la consulta: ', err);
        res.status(500).send('Error interno del servidor');
        return;
      }
      res.json(resultados);
    });
  }

module.exports = {
    getTypeRequests,
};