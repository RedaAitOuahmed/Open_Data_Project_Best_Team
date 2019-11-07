var Quote = require('../models/quotes');
var Image = require('../models/image')

module.exports = {
     getByQuote: function (quote) {

        return new Promise(function(resolve, reject){
        	var tags = quote.tags;
        	Image.getByTheme(tags[1]).then(images => resolve({'quote' : quote,
        		'image' : images[Math.floor(Math.random()*images.length)]})
        		);
        });

        
    },

 	getByTag: function (tag) {
        return new Promise(function(resolve, reject){
        	var tags = tag;
        	Image.getByTheme(tags[0]).then(images => resolve({'tag' : tag,
        		'image' : images})
        		);
        });
	}




};
