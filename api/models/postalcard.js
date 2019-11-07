var Quote = require('../models/quotes');
var Image = require('../models/image')

module.exports = {
     getByQuote: function (quote) {

        return new Promise(function(resolve, reject){
        	var tags = quote.tags;
        	Image.getByTheme(tags[1]).then(image => resolve({'quote' : quote,
        		'image' : image	})
        		);
        		
        });

        
    },

};
