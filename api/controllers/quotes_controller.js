'use strict';

var Quotes = require('../models/quotes')


exports.quotes_by_id = function(req, res) { 
    // retrieve quotes id from request
    var id = req.params.id;
    // call function get by id of Quotes model class 
    var results = Quotes.getById(id);
    // format the response according to user preferences (json, csv, xml ...)
    // Quotes.getById(id).then(results => res.json(results));
    res.json("testing");
//   Request.get("https://jsonplaceholder.typicode.com/todos/2",
//     (error, response, body) => {
//         if(error) {
//             return console.dir(error);
//         }
//         var obj = JSON.parse(body);
//         res.json(Image.getById(1));
//     });  
};
  

