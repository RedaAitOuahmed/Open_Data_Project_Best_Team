'use strict';

var Postalcard = require('../models/postalcard');
var Quote = require('../models/quotes');


exports.random_postalcard = function(req, res) {

    var items = ["Music","life","sports","food","education"];
    var rndval=items[Math.floor(Math.random()*items.length)];

    //var random_tag = "woman";
    var quote_promise = Quote.getByTags(rndval);
    // call function get by id of Image model class 
    var results_promise = quote_promise.then(quotes =>
        Postalcard.getByQuote(quotes[Math.floor(Math.random()*quotes.length)]));
    // format the response according to user preferences (json, csv, xml ...)
    results_promise.then(results => res.json(results)); 
};


exports.postalcard_by_tag = function(req, res) {

    var tag = req.params.tag;
    var theme = req.params.tag;
    console.log("controler tag -->" + tag);
    //var rndval=items[Math.floor(Math.random()*items.length)];

    //var random_tag = "woman";
    var quote_promise = Quote.getByTags(tag);
    // call function get by id of Image model class 

    var results_promise = quote_promise.then(quotes =>

            quotes.map(
              q=> new Promise(function(resolve, reject){
                      resolve(Postalcard.getByQuote(q));
                  })
            )
      );
    results_promise.then(resultss => Promise.all(resultss).then(results => res.json(results)));
 
   
};


exports.postalcard_by_author = function(req, res) {


    var author = req.params.author;
    var quote_promise = Quote.getByAuthor(author);

    var results_promise = quote_promise.then(quotes =>

            quotes.map(
              q=> new Promise(function(resolve, reject){
                      resolve(Postalcard.getByQuote(q));
                  })
            )
      );

    results_promise.then(resultss => Promise.all(resultss).then(results => res.json(results)));

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

