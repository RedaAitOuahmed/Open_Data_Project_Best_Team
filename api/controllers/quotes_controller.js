'use strict';

var Quotes = require('../models/quotes');

exports.quotes_by_author = function(req, res) { 
    // retrieve quotes id from request
    var author = req.params.author;
    // call function get by id of Quotes model class 
    var results = Quotes.getByAuthor(author);
    // format the response according to user preferences (json, csv, xml ...)
    results.then(results => 
        res.format({
            'application/json': function () {
                res.json(results);
            },
            'application/csv': function () {
                var li_test = []
                for (var i = 0; i< results.length ; i++) {
                    var im ={}
                    im.quote=results[i].quote.replace(/,/g, " ")
                    im.author=results[i].author.replace(/,/g, " ")
                    im.likes=results[i].likes
                    im.tags=results[i].tags
                    im.language=results[i].language
                    li_test.push(im)
                }
                res.csv(li_test,true,{separator: "\t"});
            }
        }))

};
  

exports.quotes_by_tags = function(req, res) { 
    // retrieve quotes id from request
    var tags = req.params.tags;
    // call function get by id of Quotes model class 
    var results = Quotes.getByTags(tags);
    // format the response according to user preferences (json, csv, xml ...)
    results.then(results =>         res.format({
            'application/json': function () {
                res.json(results);
            },
            'application/csv': function () {
                var li_test = []
                for (var i = 0; i< results.length ; i++) {
                    var im ={}
                    im.quote=results[i].quote.replace(/,/g, " ")
                    im.author=results[i].author.replace(/,/g, " ")
                    im.likes=results[i].likes
                    im.tags=results[i].tags
                    im.language=results[i].language
                    li_test.push(im)
                }
                res.csv(li_test,true);
            }
        }))

};