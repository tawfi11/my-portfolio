let meArr = [];
for(let i = 0; i < 3; i++){
    meArr.push(`Imgs/me/${i}.jpg`);
}

let i = 1;
setInterval(function(){
    $("#me").fadeOut(1000);
    setTimeout(function(){
        $("#me").attr("src", meArr[i]);
    }, 1000);
    $("#me").fadeIn(1000);
    i+=1;
    if(i > 2){
        i = 0;
    }
}, 8000);

if($(window).height() > $(window).width()){
    $(".nav-item").css("margin-left","");
}

let star = 1000, star2 = 500, star3 = 100;

let shadowBox=[]
for(let i = 0; i < star; i++){
    shadowBox.push(`${Math.random() * 100}vw ${Math.random() * 200}vh #FFF`)
}

let shadowBox2 = []
for(let i = 0; i < star2; i++){
    shadowBox2.push(`${Math.random() * 100}vw ${Math.random() * 200}vh #FFF`)
}

let shadowBox3 = []
for(let i = 0; i < star3; i++){
    shadowBox3.push(`${Math.random() * 100}vw ${Math.random() * 200}vh #FFF`)
}

let boxShadow = shadowBox.join(' , ');
$("#stars").css("box-shadow", boxShadow);

boxShadow = shadowBox2.join(' , ');
$("#stars2").css("box-shadow", boxShadow)

boxShadow = shadowBox3.join(' , ');
$("#stars3").css("box-shadow", boxShadow)

let checkScroll = true;
$(window).bind('mousewheel DOMMouseScroll', function(event){
    if(checkScroll){
        if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
            console.log('scroll up');
            console.log(parseInt($(".earth").css("height")))
            if(parseInt($(".container").css("top")) < $(window).height()){
                $(".earth").animate({opacity: "+=0.01"}, 1)
                $(".container").animate({top: "+=0.8vh"}, 1)
            }
        }
        else {
            console.log('scroll down');
            if(parseInt($(".container").css("top")) > 0) {
                if(parseFloat($(".earth").css("opacity")) > 0.15){
                    $(".earth").animate({opacity: "-=0.01"}, 1)
                }
                $(".container").animate({top: "-=0.8vh"}, 1)
            }
        }
        checkScroll = false;
    }

});
setInterval(function(){checkScroll = true;},1);