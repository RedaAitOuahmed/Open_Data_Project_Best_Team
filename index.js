const port = process.env.PORT || 3000

var express = require('express')
var csv = require('csv-express')
var fs = require('file-system')
var cors = require('cors')
var path = require('path')

var  app = express()
app.use(cors());

  //model = require('./api/models/model'), //we'll need it later
var  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client')));


var routes = require('./api/routes/route'); //importing route
routes(app); //register the route


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);