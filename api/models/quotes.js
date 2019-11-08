var Request = require("request");
var dash = require('lodash');

function getQuotesObject(bigQuotesObject){
    return dash.pick(bigQuotesObject, ['quote', 'author','likes','tags','language']);
};

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
          'Authorization' : 'Token 796d1d7a3b38cc92f24840af033b8b6f6d20506f'
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
              resolve(
                        JSON.parse(body).results.map(x => getQuotesObject(x) )
                    );
          } catch(e) {
              reject(e);
          }
        }
      );
    });
  },
  getByTags: function (tags) 
  {
    return new Promise(function(resolve, reject)
    {
      Request.get
      (
        {
        headers: {'content-type' : 'application/json',
          'Authorization' : 'Token 796d1d7a3b38cc92f24840af033b8b6f6d20506f'
        },
        url:     'https://api.paperquotes.com/apiv1/quotes/',
        qs:   {'tags' : tags }
        }, 
        function(error, response, body)
        {
          // in addition to parsing the value, deal with possible errors
          if (error) return reject(error);
          try {
              // JSON.parse() can throw an exception if not valid JSON
              resolve(
                        JSON.parse(body).results.map(x => getQuotesObject(x) )
                    );
          } catch(e) {
              reject(e);
          }
        }
      );
    });
  }
};


