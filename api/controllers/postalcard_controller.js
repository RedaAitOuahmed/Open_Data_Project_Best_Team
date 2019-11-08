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
    results_promise.then(results => 
      res.format({
            'application/json': function () {
                res.json(results);
            },
            'application/csv': function () {
                var li_test = []
                var con = [results]
                for (var i = 0; i< con.length ; i++) {
                    var im ={}
                    im.quote=con[i].quote.quote.replace(/,/g, " ")
                    im.author=con[i].quote.author.replace(/,/g, " ")
                    im.likes=con[i].quote.likes
                    im.tags=con[i].quote.tags
                    im.language=con[i].quote.language
                    im.id=con[i].image.id
                    im.largeImageURL=con[i].image.largeImageURL
                    li_test.push(im)
                }
                res.csv(li_test,true);
            }
        }))
           
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
    results_promise.then(resultss => Promise.all(resultss).then(results =>
      res.format({
            'application/json': function () {
                res.json(results);
            },
            'application/csv': function () {
                var li_test = []
                for (var i = 0; i< results.length ; i++) {
                    var im ={}
                    im.quote=results[i].quote.quote.replace(/,/g, " ")
                    im.author=results[i].quote.author.replace(/,/g, " ")
                    im.likes=results[i].quote.likes
                    im.tags=results[i].quote.tags
                    im.language=results[i].quote.language
                    im.id=results[i].image.id
                    im.largeImageURL=results[i].image.largeImageURL
                    li_test.push(im)
                }
                res.csv(li_test,true);
            }
        })))
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

    results_promise.then(resultss => Promise.all(resultss).then(results =>
      res.format({
            'application/json': function () {
                res.json(results);
            },
            'application/csv': function () {
                var li_test = []
                for (var i = 0; i< results.length ; i++) {
                    var im ={}
                    im.quote=results[i].quote.quote.replace(/,/g, " ")
                    im.author=results[i].quote.author.replace(/,/g, " ")
                    im.likes=results[i].quote.likes
                    im.tags=results[i].quote.tags
                    im.language=results[i].quote.language
                    im.id=results[i].image.id
                    im.largeImageURL=results[i].image.largeImageURL
                    li_test.push(im)
                }
                res.csv(li_test,true);
            }
        })))
};



// exports.image_by_theme = function(req, res) {
//     // retrieve image theme from request
//     var theme = req.params.theme;
//     // call function get by theme of Image model class
//     var results = Image.getByTheme(theme);
//     // format the response according to user preferences (json, csv, xml ...)
//     Image.getByTheme(theme).then(results => res.json(results));

// };

