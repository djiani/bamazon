const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;

app.get("/", function(req, res){
    res.json({message: 'Welcome to bamazon app'});
})


app.listen(PORT, function(){
    console.log("App listening on PORT "+ PORT);
});

