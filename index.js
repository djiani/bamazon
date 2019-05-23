const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;
const db = require('./models');


app.get("/", function(req, res){
    res.json({message: 'Welcome to bamazon app'});
})


db.Sequelize.sync().then(function(){
    app.listen(PORT, function(){
        console.log("App listening on PORT "+ PORT);
    });
});

