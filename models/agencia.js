module.exports = (sequelize, Sequelize) => {
    const Agencia = sequelize.define("Agencia", {
        numeroAgencia: Sequelize.INTEGER,
        descricao: Sequelize.STRING
    })

    Agencia.associate = (models) => {
        Agencia.belongsTo(models.Banco, {
            foreignKey: "idBanco",
            as: "bancos"
        })
    }



    return Agencia
}