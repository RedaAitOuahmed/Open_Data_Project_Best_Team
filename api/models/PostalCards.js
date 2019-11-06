var Request = require("request");

module.exports = {
    getById: async function (id) {
        Request.get({
            headers: {'content-type' : 'application/json'},
            url:     'https://pixabay.com/api',
            qs:   {'id' : '111'}
          }, function(error, response, body){
            return body;
          });
    },

    getByTheme: function (theme_author) {
        Request.get({
            headers: {'content-type' : 'application/json'},
            url:     'https://pixabay.com/api',
            qs:   {'author' : '', 
                    'tag' : 'love' }
          }, function(error, response, body){
            console.log(body);
            return body;
          });
    },

    getByTheme1: function (theme) {
        console.log('Hello, my theme is ' + theme );
        return "bbb";    
    }
  };
  