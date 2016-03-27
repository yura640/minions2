
require.config({
    paths:{
        "jquery":"./jquery/dist/jquery.min"
    }
});
require(["jquery",'app'], function($,app){

    $(".gallery").click(function(){
        var curentTarget = event.target.parentNode;
        var span = curentTarget.querySelector('span');
        span.innerText = Number(span.innerText)+1;
        localStorage.setItem(curentTarget.id, span.innerText);

    });
});