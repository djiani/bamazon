// Requiring our models
var db = require("../models");
const op = db.Sequelize.Op;

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
  
  app.post("/search", function(req, res){
    console.log(req.body);
    if(req.body.search){
      console.log('i am on search');
      if(req.body.category == "All"){
        db.Product.findAll({
          where: {product_name:{[op.like]:  "%"+req.body.search+"%"} } 
        }).then(function(data){
          console.log("data_all" + data)
              res.json(data);
            });
      }else{
        db.Product.findAll({
          where: {
            product_name:{[op.like]:  "%"+req.body.search+"%"},
            department_name: req.body.category
          }
        }).then(function(data){
          console.log("data" + data)
              res.json(data);
            });
      }
    }else{
      if(req.body.category == "All"){
        db.Product.findAll({}).then(function(data){
          console.log("data_all" + data)
              res.json(data);
            });
      }else{
        db.Product.findAll({
          where: {
            department_name: req.body.category
          }
        }).then(function(data){
          console.log("data" + data)
              res.json(data);
            });
      }
    }

    
  })

}