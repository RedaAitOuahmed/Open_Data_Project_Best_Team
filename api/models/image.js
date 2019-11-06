var Request = require("request");
var dash = require('lodash');

function getImageObject(bigImageObject){
    return dash.pick(bigImageObject, ['id', 'largeImageURL']);
};

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
                    resolve(
                        getImageObject(JSON.parse(body).hits[0])
                    );
                } catch(e) {
                    reject(e);
                }
            });
        });

        
    },

    getByTheme: function (theme) {
        return new Promise(function(resolve, reject){
            Request.get({
                headers: {'content-type' : 'application/json'},
                url:     'https://pixabay.com/api',
                qs:   {'key' : '14186752-f0de8db3b4cd5a89455d4792e',
                        'q' : theme }
                }, function(error, response, body){
                if (error) return reject(error);
                try {
                // JSON.parse() can throw an exception if not valid JSON
                    resolve(
                        getImageObject(JSON.parse(body).hits[0])
                    );
                } catch(e) {
                  reject(e);
                }
            });
        });
    },


};


  



