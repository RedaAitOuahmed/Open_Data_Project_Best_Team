var Request = require("request");

module.exports = {
    getById: async function (id) {
        Request.get({
            headers: {'content-type' : 'application/json'},
            url:     'https://api.paperquotes.com/apiv1/quotes/',
            qs:   {'key' : 'a77448f467c568cff8f3ae0244bcb21a322b6cab', 
                    'id' : id }
          }, function(error, response, body){
            return body;
          });
    },
};
  



