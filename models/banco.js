
module.exports = (sequelize, Sequelize) => {
    const Banco = sequelize.define("Banco", {
        CNPJ: Sequelize.STRING,
        razaoSocial: Sequelize.STRING,
        contato: Sequelize.INTEGER
    })

    Banco.associate = (models) => {
        Banco.hasMany(models.Agencia, {
            foreignKey: "idBanco",
            as: "bancos"
        })
    }
    return Banco
}