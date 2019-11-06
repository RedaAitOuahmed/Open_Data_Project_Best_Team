'use strict';

var Image = require('../models/image')


exports.image_by_id = function(req, res) { 
    // retrieve image id from request
    var id = req.params.id;
    // call function get by id of Image model class 
    var results = Image.getById(id);
    // format the response according to user preferences (json, csv, xml ...)
    Image.getById(id).then(results => res.json(results));
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

