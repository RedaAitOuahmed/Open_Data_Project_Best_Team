function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}
function getRoute(clicked_id)
{
    route = "/";
    if (clicked_id.match(/.*postalCard.*/g)) {
        route += "postal_card/";
    } else if (clicked_id.match(/.*quote.*/g)) {
        route += "Quotes/";
    }else if(clicked_id.match(/.*image.*/g))
    {
        route += "Images/";
    }

    if (clicked_id.match(/.*tag.*/g)) {
        route += "tags";
    } else if (clicked_id.match(/.*author.*/g)) {
        route += "author";
    }else if(clicked_id.match(/.*id.*/g))
    {
        //in case it's an imge
        route += "getById";
    }else if(clicked_id.match(/.*theme.*/g))
    {
        route += "getByTheme"
    }
    return route;
}
function fetchCSV(route,route_param)
{
    fetch(route + "/" + route_param, 
                {
                    method: 'GET',
                    headers: { 'accept' : 'application/csv'}
                }
            ).then(function(response){
                response.blob().then(function(datablob)
                {
                    datablob.name = 'newfile.csv'
                    anchor = document.createElement('a')
                    anchor.download = datablob.name
                    anchor.href = window.URL.createObjectURL(datablob)
                    anchor.dataset.downloadurl = ['application/csv', anchor.download, anchor.href].join(':')
                    anchor.click()
                })
            })
}

function fetchJSON(route,target_id,route_param)
{
    fetch(route+"/"+route_param, 
                {
                    method: 'GET',
                    headers: { 'accept' : 'application/json'}
                }
            ).then(function(response){
                response.json().then(function(data)
                {
                    $("#"+target_id).css("display", "block");
                    $("#"+target_id).html("<pre> <samp>" + JSON.stringify(data,null,2) + "</pre> </samp>")
                })
            })
}

(function($) {
    $("form").submit(function(e){
        e.preventDefault();
    });
    
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
                console.log(postalCard)
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
    });

    $(".action_button").click(function(event) {
        clicked_id = event.target.id;
        route = getRoute(clicked_id);
        input_id = clicked_id.replace('_csv','').replace('_json','') + '_input'
        var param = $('#'+input_id).val();
        console.log(input_id)
        if (clicked_id.match(/.*json/g))
        {            
            fetchJSON(route,clicked_id+"_results",param);
        }
        else if (clicked_id.match(/.*csv/g))
        {
            fetchCSV(route,param);
        }
    });
})(jQuery);