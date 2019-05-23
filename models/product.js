module.exports = function(sequelize, DataTypes){
    const Product = sequelize.define("Product",{
        product_name: {
            type: DataTypes.STRING,
            allowNotNull: false
        },
        department_name: {
            type: DataTypes.STRING,
            allowNotNull: false
        },
        price:{
            type: DataTypes.DECIMAL(10, 2),
            allowNotNull: false,
            defaultValue: 0,
            validate:{
                isNumeric: true
            }
        }, 
        stock_quantity:{
            type: DataTypes.INTERGER,
            allowNotNull: false,
            defaultValue: 0,
            validate:{
                isInt: true,
                min: 0
            }
        }, 
    })
}