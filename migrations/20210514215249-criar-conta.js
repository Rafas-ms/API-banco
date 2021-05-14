'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.createTable('contas', {
      idAgencia: { 
      primaryKey: true,
      allowNull: true,
      type: Sequelize.INTEGER,
      references: {
        model: "agencia",
        key: "id",
        as: "idAgencia"
      }
    },
    idCliente: { 
      primaryKey: true,
      allowNull: true,
      type: Sequelize.INTEGER,
      references: {
        model: "clientes",
        key: "id",
        as: "idCliente"
      }
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  })

    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.dropTable('contas');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
