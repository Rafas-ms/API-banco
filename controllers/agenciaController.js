const { Agencia, Banco } = require("../models/");

class AgenciaController {

    async createAgency(req,res) {
        try {
            let bancoRes = await Banco.findByPk(req.body.idBanco);   
            if (bancoRes) {
                let agencia = {
                    id: req.body.id,
                    numeroAgencia: req.body.numeroAgencia,
                    descricao: req.body.descricao,
                    idBanco: req.body.idBanco
                }
                const agenciaRes = await Agencia.create(agencia);
                res.status(200).json(agenciaRes);
            }
            else {
                res.status(200).json({message: "Esse banco não existe!"});
            }
        }
        catch(err){ 
            res.status(400).json({error: err.message})
        }
    }

    async getAllAgencies(req,res) {
        try {
            const agenciaRes = await Agencia.findAll({
                include: [{
                    model: Banco, 
                    as: "bancos"                   
                }]
            })
            res.status(200).json(agenciaRes);
        }
        catch(err) {
            res.status(400).json({error: err.message})
        }
    }

    async getOneAgency(req,res) {
        try{
            const agenciaRes = await Agencia.findByPk(req.params.id,{
                include: [{
                    model: Banco, 
                    as: "bancos"                   
                }]
            })
            if(agenciaRes){
                res.status(200).json(agenciaRes);
            }
            else{
                res.status(200).json({message: "Agência não encontrada!"})
            }
        }
        catch(err){
            res.status(400).json({error: err.message})
        }
    }

    async updateAgency(req,res) {
        try{
            const agenciaRes = await Agencia.findByPk(req.params.id,{
                include: [{
                    model: Banco, 
                    as: "bancos"                   
                }]
            })
            if(agenciaRes){
                await agenciaRes.update(req.body)
                res.status(200).json(agenciaRes);
            }
            else{
                res.status(200).json({message: "Agência não encontrada!"})
            }
        }
        catch(err){
            res.status(400).json({error: err.message})
        }
    }

    async deleteAgency(req,res) {
        try{
            const agenciaRes = await Agencia.findByPk(req.params.id,{
                include: [{
                    model: Banco, 
                    as: "bancos"                   
                }]
            })
            if(agenciaRes){
                await agenciaRes.destroy()
                res.status(200).json(agenciaRes);
            }
            else{
                res.status(200).json({message: "Agência não encontrada!"})
            }   
        }
        catch(err){
            res.status(400).json({error: err.message})
        }
    }

    async getAgenciesByName(req,res){
        let name = '%' + req.query.numeroAgencia + '%'
        try{
            const agenciaRes = await Agencia.findAll({
                where: {
                    numeroAgencia: {
                       [Op.like]: name
                    }
                }
            });
            if (agenciaRes)
            res.status(200).json(agenciaRes);
            else
            res.status(200).json({message: "Agência não encontrada!"})
        }
        catch(err){
            res.status(400).json({error: err.message})
        }
    }
}

module.exports = new AgenciaController();