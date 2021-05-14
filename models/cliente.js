module.exports = (sequelize, Sequelize) => {
    const Cliente = sequelize.define("Cliente", {
        nome: Sequelize.STRING,
        CPF: Sequelize.INTEGER,
        sexo: Sequelize.STRING,
        salario: Sequelize.DOUBLE,
        contato: Sequelize.INTEGER
    })

   

    return Cliente
}