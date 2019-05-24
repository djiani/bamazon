const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;
const db = require('./models');


app.get("/", function (req, res) {
    res.json({ message: 'Welcome to bamazon app' });
});

    // const rawData = [
    // {
    //     product_name: "Davines OI All in One Milk",
    //     department_name: "Hair care",
    //     price: 34.00,
    //     stock_quantity: 20,
    //     product_url: "https://images-na.ssl-images-amazon.com/images/I/71t-WfqFZVL._SY679_.jpg"
    // },
    // {
    //     product_name: "Davines This is a Medium Hold Pliable Paste",
    //     department_name: "Hair care",
    //     price: 29.48,
    //     stock_quantity: 5,
    //     product_url: "https://images-na.ssl-images-amazon.com/images/I/710UtWmfEDL._SY679_.jpg"
    // },
    // {
    //     product_name: "Lenovo Ideapad 15.6",
    //     department_name: "Electronics",
    //     price: 487.99,
    //     stock_quantity: 6,
    //     product_url: "https://images-na.ssl-images-amazon.com/images/I/61hoTcz8p0L._SL1000_.jpg"
    // },
    // {
    //     product_name: "HP 2019 Premium Flagship Pavilion X360 2-In-1 15.6",
    //     department_name: "Electronics",
    //     price: 487.99,
    //     stock_quantity: 20,
    //     product_url: "https://images-na.ssl-images-amazon.com/images/I/61O9kGUeavL._SL1500_.jpg"
    // },
    // {
    //     product_name: "adidas Women's Cloudfoam Advantage W Fashion Sneaker",
    //     department_name: "shoes",
    //     price: 44.94,
    //     stock_quantity: 20,
    //     product_url: "https://images-na.ssl-images-amazon.com/images/I/71OYf8LwePL._UX500_.jpg"
    // },
    // {
    //     product_name: "adidas Women's Cloudfoam Advantage W Fashion Sneaker",
    //     department_name: "shoes",
    //     price: 44.94,
    //     stock_quantity: 20,
    //     product_url: "https://images-na.ssl-images-amazon.com/images/I/815udGMXvWL._UX500_.jpg"
    // }
    // ]
    // rawData.map(function(product){
    //     db.Product.create(product);
    // })

db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});

