var Request = require("request");

module.exports = {
    getById: function (id) {
        return new Promise(function(resolve, reject){
            Request.get({
                headers: {'content-type' : 'application/json'},
                url:     'https://pixabay.com/api',
                qs:   {'key' : '14176624-4fa63ba77e83e5b18bf876c11', 
                        'id' : id }
                }, function(error, response, body){
                // in addition to parsing the value, deal with possible errors
                if (error) return reject(error);
                try {
                    // JSON.parse() can throw an exception if not valid JSON
                    resolve(JSON.parse(body));
                } catch(e) {
                    reject(e);
                }
            });
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
  



