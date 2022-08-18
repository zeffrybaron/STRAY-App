const Sequelize = require('sequelize')

const sequelize = require('./sequelize')

class Order extends Sequelize.Model {}

Order.init({
        id: {
            type: Sequelize.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
            allowNull: false
        },
        id_users: {
            type: Sequelize.DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'id'
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'

        },
        id_order_items: {
            type: Sequelize.DataTypes.INTEGER,
            references: {
                model: 'order_items', // nama table
                key: 'id' // nama column
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        },
        id_promo: {
            type: Sequelize.DataTypes.INTEGER,
            references: {
                model: 'promos',
                key: 'id'
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        },
        no_invoice: {

            type: Sequelize.DataTypes.STRING,

        },
        customer_name: {
            type: Sequelize.DataTypes.STRING,
        },
        date_order: {
            type: Sequelize.DataTypes.DATE,
            default: new Date(),
        },
        sender_addres: {
            type: Sequelize.DataTypes.TEXT,
        },
        receiver_addres: {
            type: Sequelize.DataTypes.TEXT,
        },
        total_price: {
            type: Sequelize.DataTypes.FLOAT,
        },
        order_status: {
            type: Sequelize.DataTypes.INTEGER,
        },
    }, {
        sequelize: sequelize,
        timestamps: true,
        underscored: true,
        paranoid: true,
        freezeTableName: true,
        tableName: 'orders'
    }

)
module.exports = Order