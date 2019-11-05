var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  //model = require('./api/models/model'), //we'll need it later
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/route'); //importing route
routes(app); //register the route


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);