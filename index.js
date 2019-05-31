const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;
const db = require('./models');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory to be served
app.use(express.static("./public"));

const html_routes = require("./routes/html_routes.js");
html_routes(app);
const api_routes = require("./routes/api-routes");
api_routes(app);

db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});

