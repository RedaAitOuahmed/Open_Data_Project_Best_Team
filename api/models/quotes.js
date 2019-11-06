var Request = require("request");

module.exports = 
{
  getByAuthor: function (author) 
  {
    return new Promise(function(resolve, reject)
    {
      Request.get
      (
        {
        headers: {'content-type' : 'application/json',
          'Authorization' : 'Token a77448f467c568cff8f3ae0244bcb21a322b6cab'
        },
        url:     'https://api.paperquotes.com/apiv1/quotes/',
        qs:   {'author' : author }
        }, 
        function(error, response, body)
        {
          // in addition to parsing the value, deal with possible errors
          if (error) return reject(error);
          try {
              // JSON.parse() can throw an exception if not valid JSON
              resolve(JSON.parse(body));
          } catch(e) {
              reject(e);
          }
        }
      );
    });
  }
};
  



