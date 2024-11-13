const express = require('express');
const router = express.Router();
const dbConnection = require('./database/db');
const lawyerController = require('./controllers/lawyerController');
const requestsController = require('./controllers/requestsController');
const clientController = require('./controllers/clientController');
const monitoringController = require('./controllers/MonitoringController');
const typeRequestsController = require('./controllers/typeRequestsController');

const app = express();

// Middleware para analizar JSON
app.use(express.json());

// Ruta para obtener todos los abogados
router.get('/lawyers', lawyerController.getLawyers);

// Ruta para agregar un abogado
router.post('/lawyers', lawyerController.addLawyer);

// Ruta para actualizar un abogado
router.put('/lawyers/:id', lawyerController.updateLawyer);

// Ruta para cambiar el estado de un abogado
router.patch('/lawyers/:id', lawyerController.changeStatus);

// Ruta para obtener un abogado por su ID
router.get('/lawyers/:id', lawyerController.getLawyerById);

// Ruta para obtener todas las peticiones
router.get('/requests', requestsController.getRequests);

// Ruta para obtener las peticiones de la vista vw_peticiones
router.get('/vw_requests', requestsController.getvwRequests);

// Ruta para obtener una petición por su ID
router.get('/requests/:id', requestsController.getRequestById);

//ruta para agregar una peticion
router.post('/requests', requestsController.addRequest);

// Ruta para actualizar una petición
router.put('/requests/:id', requestsController.updateRequest);

// Ruta para cambiar el estado de una petición
router.patch('/requests/:id', requestsController.changeStatus);

// Ruta para obtener todos los clientes
router.get('/clients', clientController.getClients);

// Ruta para agregar un cliente
router.post('/clients', clientController.addClient);

// Ruta para actualizar un cliente
router.put('/clients/:id', clientController.updateClient);

// Ruta para cambiar el estado de un cliente
router.patch('/clients/:id', clientController.changeStatus);

// Ruta para obtener un cliente por su ID
router.get('/clients/:id', clientController.getClientById);

// Ruta para obtener todos los seguimientos
router.get('/monitoring',monitoringController.getMonitoring);

// Ruta para obtener los tipos de peticiones
router.get('/type_requests', typeRequestsController.getTypeRequests);

module.exports = router;
