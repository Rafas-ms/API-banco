const { Banco } = require("../models/");
const { Op } = require ('sequelize')

class BancoController {
    
    async createBank(req,res) {
        try {
            const bancoRes = await Banco.create(req.body)
            res.status(200).json(bancoRes)
        }
        catch(err){ 
            res.status(400).json({error: err.message})
        }
    }

    async getAllBanks(req,res) {
        try{
            const bancoRes = await Banco.findAll()
            res.status(200).json(bancoRes)
        }
        catch(err){
            res.status(400).json({error: err.message})
        }
    }

    async getOneBank(req,res) {
        try{
            const bancoRes = await Banco.findByPk(req.params.id)
            if(bancoRes){
                res.status(200).json(bancoRes)
            }
            else{
                res.status(200).json({message: "Banco não encontrado!"})
            }           
        }
        catch(err){
            res.status(400).json({error: err.message})
        }
    }

    async updateBank(req,res) {
        try{
            const bancoRes = await Banco.findByPk(req.params.id)
            if(bancoRes){
                await bancoRes.update(req.body)
                res.status(200).json(bancoRes)
            }
            else{
                res.status(200).json({message: "Banco não encontrado!"})
            }
        }
        catch(err){
            res.status(400).json({error: err.message})
        }
    }

    async deleteBank(req,res) {
        try{
            const bancoRes = await Banco.findByPk(req.params.id)
            if(bancoRes){
                await bancoRes.destroy()
                res.status(200).json(bancoRes)
            }
            else{
                res.status(200).json({message: "Banco não encontrado!"})
            }
        }
        catch(err){
            res.status(400).json({error: err.message})
        }
    }

    async getBanksByName(req,res){
        let name = '%' + req.query.razaoSocial + '%'
        try{
            const bancoRes = await Banco.findAll({
                where: {
                    razaoSocial: {
                       [Op.like]: name
                     }
                }
            });
            if (bancoRes)
            res.status(200).json(bancoRes);
            else
            res.status(200).json({message: "Banco não encontrado!"})
        }
        catch(err){
            res.status(400).json({error: err.message})
        }
    }
}

module.exports = new BancoController();