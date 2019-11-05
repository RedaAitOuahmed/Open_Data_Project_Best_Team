$(document).ready(function(){

    $.ajax({ 
        type : "GET", 
        url : "127.0.0.1/tests", 
        beforeSend: function(xhr){xhr.setRequestHeader('Authorization', 'aaa-bbb-ccc');},
        success : function(result) { 
            console.log(result);
        }, 
        error : function(result) { 
          //handle the error 
        } 
      }); 
  
  });