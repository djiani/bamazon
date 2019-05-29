// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/products", function(req, res) {
    
    db.Product.findAll({}).then(function(dbProducts) {
      res.json(dbProducts);
    });
  });

  // Get route for retrieving a single product
  app.get("/api/product/:id", function(req, res) {

    db.Product.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(prod) {
        console.log("test product id"+ req.params.id);
      console.log(prod);
      res.json(prod);
    });
  });
  

}