'use strict';

var Postalcard = require('../models/postalcard');
var Quote = require('../models/quotes');


exports.random_postalcard = function(req, res) {
    var random_tag = "woman";
    var quote_promise = Quote.getByTags(random_tag);
    // call function get by id of Image model class 
    var results_promise = quote_promise.then(quotes => Postalcard.getByQuote(quotes[0]));
    // format the response according to user preferences (json, csv, xml ...)
    results_promise.then(results => res.json(results));
    // res.json("testing");
//   Request.get("https://jsonplaceholder.typicode.com/todos/2",
//     (error, response, body) => {
//         if(error) {
//             return console.dir(error);
//         }
//         var obj = JSON.parse(body);
//         res.json(Image.getById(1));
//     });  
};

exports.image_by_theme = function(req, res) {
    // retrieve image theme from request
    var theme = req.params.theme;
    // call function get by theme of Image model class
    var results = Image.getByTheme(theme);
    // format the response according to user preferences (json, csv, xml ...)
    Image.getByTheme(theme).then(results => res.json(results));

};
exports.image_all = function(req, res) {    
    Request.get("https://jsonplaceholder.typicode.com/todos/2",
      (error, response, body) => {
          if(error) {
              return console.dir(error);
          }
          var obj = JSON.parse(body);
          res.json(obj.userId);
      });  
  };

