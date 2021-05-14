const { Cliente } = require("../models/");
const { Op } = require ('sequelize')

class ClienteController {
    
    async createClient(req,res) {
        try {
            const clienteRes = await Cliente.create(req.body)
            res.status(200).json(clienteRes)
        }
        catch(err){ 
            res.status(400).json({error: err.message})
        }
    }

    async getAllClients(req,res) {
        try{
            const clienteRes = await Cliente.findAll()
            res.status(200).json(clienteRes)
        }
        catch(err){
            res.status(400).json({error: err.message})
        }
    }

    async getOneClient(req,res) {
        try{
            const clienteRes = await Cliente.findByPk(req.params.id)
            if(clienteRes){
                res.status(200).json(clienteRes)
            }
            else{
                res.status(200).json({message: "Cliente não encontrado!"})
            }
        }
        catch(err){
            res.status(400).json({error: err.message})
        }
    }

    async updateClient(req,res) {
        try{
            const clienteRes = await Cliente.findByPk(req.params.id)
            if(clienteRes){
                await clienteRes.update(req.body)
                res.status(200).json(clienteRes)
            }
            else{
                res.status(200).json({message: "Cliente não encontrado!"})
            }
        }
        catch(err){
            res.status(400).json({error: err.message})
        }
    }

    async deleteClient(req,res) {
        try{
            const clienteRes = await Cliente.findByPk(req.params.id)
            if(clienteRes){
                await clienteRes.destroy()
                res.status(200).json(clienteRes)
            }
            else{
                res.status(200).json({message: "Cliente não encontrado!"})
            }

        }
        catch(err){
            res.status(400).json({error: err.message})
        }
    }

    async getClientsByName(req,res){
        let name = '%' + req.query.nome + '%'
        try{
            const clienteRes = await Cliente.findAll({
                where: {
                   nome: {
                       [Op.like]: name
                     }
                }
            });
            if (clienteRes)
            res.status(200).json(clienteRes);
            else
            res.status(200).json({message: "Cliente não encontrado!"})
        }
        catch(err){
            res.status(400).json({error: err.message})
        }
    }
}

module.exports = new ClienteController();