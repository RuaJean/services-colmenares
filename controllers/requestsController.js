const dbConnection = require('../database/db');

// Controlador para mostrar todas las peticiones'
function getRequests(req, res) {
  dbConnection.query('SELECT * FROM peticiones', (err, resultados) => {
    if (err) {
      console.error('Error al ejecutar la consulta: ', err);
      res.status(500).send('Error interno del servidor');
      return;
    }
    res.json(resultados);
  });
}

//Mostrar datos de vw_peticiones
function getvwRequests(req, res) {
  dbConnection.query('SELECT * FROM vw_peticiones', (err, resultados) => {
    if (err) {
      console.error('Error al ejecutar la consulta: ', err);
      res.status(500).send('Error interno del servidor');
      return;
    }
    res.json(resultados);
  });
}

// Controlador para buscar una peticion por id
function getRequestById(req, res) {
  const { id } = req.params;
  dbConnection.query('SELECT * FROM peticiones WHERE pet_id = ?', [id], (err, resultados) => {
    if (err) {
      console.error('Error al ejecutar la consulta: ', err);
      res.status(500).send('Error interno del servidor');
      return;
    }
    res.json(resultados);
  });
}

// Controlador para agregar una peticion
function addRequest(req, res) {
  const { 
    abo_documento, pet_descripcion, pet_fecha_respuesta, tipo_pe_id, id_clientes, seg_id, pet_prioridad 
  } = req.body;
  
  const fecha_registro = new Date();
  const pet_status = 1;


  const sqlQuery = 'INSERT INTO peticiones (pet_descripcion, pet_fecha_registro, pet_fecha_respuesta, abo_documento, tipo_pe_id, id_clientes, seg_id, pet_prioridad, pet_status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
  
  const fechaRespuesta = pet_fecha_respuesta ? new Date(pet_fecha_respuesta) : null;

  const values = [pet_descripcion, fecha_registro, fechaRespuesta, abo_documento, tipo_pe_id, id_clientes, seg_id, pet_prioridad, pet_status];

  dbConnection.query(sqlQuery, values, (err, resultados) => {
    if (err) {
      console.error('Error al ejecutar la consulta:', err);
      res.status(500).send('Error interno del servidor');
      return;
    }
    res.status(201).send('Petición agregada correctamente');
  });
}



// Controlador para actualizar una peticion
function updateRequest(req, res) {
  const { id } = req.params;
  const {
    pet_descripcion,
    pet_fecha_registro,
    pet_fecha_respuesta,
    tipo_pe_id,
    abo_documento,
    id_clientes,
    seg_id,
    pet_prioridad
  } = req.body;

  const sqlQuery = `
    UPDATE peticiones
    SET
      pet_descripcion = ?,
      pet_fecha_registro = ?,
      pet_fecha_respuesta = ?,
      tipo_pe_id = ?,
      abo_documento = ?,
      id_clientes = ?,
      seg_id = ?,
      pet_prioridad = ?
    WHERE pet_id = ?
  `;

  const values = [
    pet_descripcion,
    pet_fecha_registro,
    pet_fecha_respuesta,
    tipo_pe_id,
    abo_documento,
    id_clientes,
    seg_id,
    pet_prioridad,
    id
  ];

  dbConnection.query(sqlQuery, values, (err, resultados) => {
    if (err) {
      console.error('Error al ejecutar la consulta:', err);
      res.status(500).send('Error interno del servidor');
      return;
    }
    if (resultados.affectedRows === 0) {
      res.status(404).send('Petición no encontrada');
    } else {
      res.status(200).send('Petición actualizada correctamente');
    }
  });
}


// Controlador para cambiar el estado de una peticion
function changeStatus(req, res) {
  const { id } = req.params;
  const status = 0; 

  const sqlQuery = `
      UPDATE peticiones
      SET pet_status = ?
      WHERE pet_id = ?
  `;

  dbConnection.query(sqlQuery, [status, id], (err, resultados) => {
      if (err) {
          console.error('Error al ejecutar la consulta:', err);
          res.status(500).send('Error interno del servidor');
          return;
      }
      if (resultados.affectedRows === 0) {
          res.status(404).send('Petición no encontrada');
      } else {
          res.status(200).send('Estado de la petición actualizado correctamente');
      }
  });
}




module.exports = {
    getRequests,
    getvwRequests,
    getRequestById,
    updateRequest,
    addRequest,
    changeStatus,
};