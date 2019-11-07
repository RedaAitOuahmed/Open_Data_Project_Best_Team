const port = process.env.PORT || 3000

var express = require('express')
var csv = require('csv-express')
var fs = require('file-system')
var  app = express()
app.use(cors());


  //model = require('./api/models/model'), //we'll need it later
var  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/route'); //importing route
routes(app); //register the route

app.get('/index', function(req,res) {
	fs.readFile("./client/client.html", function(err, html) {
	if(err){throw err;}
	res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(html)
            res.end()
	})

})

app.listen(port);

app.get('/names', function(req,res) {
    res.format({
        'application/json': function () {
            res.json(resultat);
        },

        'application/csv': function () {
            res.csv(resultat);
        },

        'application/xml': function () {
            res.xml(resultat);
        }
    })
});


console.log('todo list RESTful API server started on: ' + port);