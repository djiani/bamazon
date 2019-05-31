const db = require('../models');

const products = [
    {
        product_name: "Davines OI All in One Milk",
        department_name: "Hair care",
        price: 34.00,
        stock_quantity: 20,
        product_url: "https://images-na.ssl-images-amazon.com/images/I/71t-WfqFZVL._SY679_.jpg"
    },
    {
        product_name: "Davines This is a Medium Hold Pliable Paste",
        department_name: "Hair care",
        price: 29.48,
        stock_quantity: 5,
        product_url: "https://images-na.ssl-images-amazon.com/images/I/710UtWmfEDL._SY679_.jpg"
    },
    {
        product_name: "Lenovo Ideapad 15.6",
        department_name: "Electronics",
        price: 487.99,
        stock_quantity: 6,
        product_url: "https://images-na.ssl-images-amazon.com/images/I/61hoTcz8p0L._SL1000_.jpg"
    },
    {
        product_name: "HP 2019 Premium Flagship Pavilion X360 2-In-1 15.6",
        department_name: "Electronics",
        price: 487.99,
        stock_quantity: 20,
        product_url: "https://images-na.ssl-images-amazon.com/images/I/61O9kGUeavL._SL1500_.jpg"
    },
    {
        product_name: "adidas Women's Cloudfoam Advantage W Fashion Sneaker",
        department_name: "shoes",
        price: 44.94,
        stock_quantity: 20,
        product_url: "https://images-na.ssl-images-amazon.com/images/I/71OYf8LwePL._UX500_.jpg"
    },
    {
        product_name: "adidas Women's Cloudfoam Advantage W Fashion Sneaker",
        department_name: "shoes",
        price: 44.94,
        stock_quantity: 20,
        product_url: "https://images-na.ssl-images-amazon.com/images/I/815udGMXvWL._UX500_.jpg"
    }
]

db.sequelize.sync().then(function() {
    db.Product.bulkCreate(products)
    .then(function(rows){
        console.log("Seeded")
    }).catch(function(err) {
        console.log("Error", err)
    })
})