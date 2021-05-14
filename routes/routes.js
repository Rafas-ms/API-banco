const { Router } = require ('express');

const AgenciaController = require("../controllers/agenciaController");
const BancoController = require("../controllers/bancoController");
const ClienteController = require("../controllers/clienteController");

const routes = Router();

routes.get('/', (req,res) => {
    res.status(200).send({mensagem: "Hello World"});
})

//Rotas agencia
routes.get('/agencias', AgenciaController.getAllAgencies);
routes.get('/agencia/:id', AgenciaController.getOneAgency);
routes.get('/agenciaNome', AgenciaController.getAgenciesByName);
routes.post('/agencia', AgenciaController.createAgency);
routes.put('/agenciaUpdate/:id', AgenciaController.updateAgency);
routes.delete('/agenciaDelete/:id', AgenciaController.deleteAgency);

//Rotas banco
routes.get('/bancos', BancoController.getAllBanks);
routes.get('/banco/:id', BancoController.getOneBank);
routes.get('/bancoNome', BancoController.getBanksByName);
routes.post('/banco', BancoController.createBank);
routes.put('/bancoUpdate/:id', BancoController.updateBank);
routes.delete('/bancoDelete/:id', BancoController.deleteBank);

//Rotas cliente
routes.get('/clientes', ClienteController.getAllClients);
routes.get('/cliente/:id', ClienteController.getOneClient);
routes.get('/clienteNome', ClienteController.getClientsByName);
routes.post('/cliente', ClienteController.createClient);
routes.put('/clienteUpdate/:id', ClienteController.updateClient);
routes.delete('/clienteDelete/:id', ClienteController.deleteClient);

module.exports = routes;