'use strict';

var Quotes = require('../models/quotes');


exports.quotes_by_author = function(req, res) { 
    // retrieve quotes id from request
    var author = req.params.author;
    // call function get by id of Quotes model class 
    var results = Quotes.getByAuthor(author);
    // format the response according to user preferences (json, csv, xml ...)
    results.then(results => res.json(results));
    //res.json("testing");
//   Request.get("https://jsonplaceholder.typicode.com/todos/2",
//     (error, response, body) => {
//         if(error) {
//             return console.dir(error);
//         }
//         var obj = JSON.parse(body);
//         res.json(Image.getById(1));
//     });  
};
  

exports.quotes_by_tags = function(req, res) { 
    // retrieve quotes id from request
    var tags = req.params.tags;
    // call function get by id of Quotes model class 
    var results = Quotes.getByTags(tags);
    // format the response according to user preferences (json, csv, xml ...)
    results.then(results => res.json(results));
    //res.json("testing");
//   Request.get("https://jsonplaceholder.typicode.com/todos/2",
//     (error, response, body) => {
//         if(error) {
//             return console.dir(error);
//         }
//         var obj = JSON.parse(body);
//         res.json(Image.getById(1));
//     });  
};