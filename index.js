var express = require('express')
var csv = require('csv-express')
var  app = express()
const port = process.env.PORT || 3000
  //model = require('./api/models/model'), //we'll need it later
var  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/route'); //importing route
routes(app); //register the route


app.listen(port);

app.get('/names', function(req,res) {
    res.format({
        'application/json': function () {
            res.json(resu);
        },

        'application/csv': function () {
            res.csv();
        }

        'application/xml': function () {
            res.xml();
        }
    })
})

console.log('todo list RESTful API server started on: ' + port);