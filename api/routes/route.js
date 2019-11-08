'use strict';
module.exports = function(app) {
    var image_controller = require('../controllers/image_controller');
    var quotes_controller = require('../controllers/quotes_controller');
    var postalcard_controller = require('../controllers/postalcard_controller');
    var fs = require('file-system');

    app.get('/index', function(req, res) {
        fs.readFile("./client/client.html", function(err, html) {
            if (err) {
                throw err;
            }
            res.writeHead(200, {
                'Content-Type': 'text/html'
            })
            res.write(html)
            res.end()
        })

    });
    app.get('/final_client', function(req,res) {
        fs.readFile("./client/final_client/index.html", function(err, html) {
            if(err){throw err;}
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(html)
            res.end()
        })

    })


    // Image routes
    app.route('/Images/getById/:id')
        .get(image_controller.image_by_id);
    app.route('/Images/getByTheme/:theme')
        .get(image_controller.image_by_theme);

    // Quotes routes
    app.route('/Quotes/author/:author')
        .get(quotes_controller.quotes_by_author);

    app.route('/Quotes/tags/:tags')
        .get(quotes_controller.quotes_by_tags);

    // Postal Card routes
    app.route('/postal_card/random')
        .get(postalcard_controller.random_postalcard);

    // Postal Card routes
    app.route('/postal_card/tags/:tag')
        .get(postalcard_controller.postalcard_by_tag);
    app.route('/postal_card/author/:author')
        .get(postalcard_controller.postalcard_by_author);
};