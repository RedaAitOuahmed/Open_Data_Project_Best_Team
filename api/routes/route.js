'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/controller');

  // todoList Routes
  app.route('/tests/:id')
    .get(todoList.list_tests)


app.route('/')
	.get(function(req, res) {
    res.send('hello world');
  })


  //app.route('/tasks/:param')
    //.get(todoList.list_specefic_test)
};
