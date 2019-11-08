function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}
(function($) {
    
    $(".generate_randomly").click(function() {
        $(".postal_card_container").css("display", "block");
        scrollToAnchor('postal_card');

        fetch('/postal_card/random', 
            {
                method: 'GET',
                headers: { 'accept' : 'application/json'}
            }
        ).then(function(response){
            response.json().then(function(postalCard)
            {
                image = postalCard.image.largeImageURL
                quote = postalCard.quote.quote
                $("#postal_card").css({
                    'height':'80vh',
                    'background-image': "url('"+image+"')",
                    'width': '70vw',
                    'background-size':'cover'
                });
                $("#postal_card").html("<h2 class = 'quote'>" +quote +"</h2>" );
            })
        })

        // image ="https://www.oshomiasto.it/wp-content/uploads/2018/03/Path-of-love.jpg"
        // quote = "Reda is the best husband of all time";

        // $("#postal_card").css({
        //     'height':'80vh',
        //     'background-image': "url('https://www.oshomiasto.it/wp-content/uploads/2018/03/Path-of-love.jpg')",
        //     'width': '70vw',
        //     'background-size':'cover'
        // });
        // $("#postal_card").html("<h2 class = 'quote'>" +quote +"</h2>" );
      });
})(jQuery);