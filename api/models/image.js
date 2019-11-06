var Request = require("request");

module.exports = {
    getById: async function (id) {
        Request.get({
            headers: {'content-type' : 'application/json'},
            url:     'https://pixabay.com/api',
            qs:   {'key' : '14176624-4fa63ba77e83e5b18bf876c11', 
                    'id' : id }
          }, function(error, response, body){
            return body;
          });
    },

    getByTheme: function (theme) {
        Request.get({
            headers: {'content-type' : 'application/json'},
            url:     'https://pixabay.com/api',
            qs:   {'key' : '14176624-4fa63ba77e83e5b18bf876c11', 
                    'q' : theme }
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
  



