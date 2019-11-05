'use strict';
const fetch = require("node-fetch");
var Request = require("request");


/*console.log(fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())); */

exports.list_tests = function(req, res) {
    res.json(req.params);
    //res.json([1,2]);
    
//   fetch('https://jsonplaceholder.typicode.com/todos/2')
//   .then(res => res.json())
//   .then(json => res.send(json));
//   Request.get("https://jsonplaceholder.typicode.com/todos/10", (error, response, body) => {
//     if(error) {
//         return console.dir(error);
//     }
//     res.json(response);
//     });
  
  };

