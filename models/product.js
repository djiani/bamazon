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
            type: DataTypes.INTEGER,
            allowNotNull: false,
            defaultValue: 0,
            validate:{
                isInt: true,
                min: 0
            }
        },
        product_url:{
            type: DataTypes.STRING,
            allowNotNull: true,
            defaultValue: 'https://via.placeholder.com/150',
            validate:{
                isUrl: true,
            }
        } 
    })
    return Product;
}