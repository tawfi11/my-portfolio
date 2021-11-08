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


let numberOfDirs = 0;
let arrowMovement = 1;
reverse = true;
let downArrInterval = setInterval(function(){
    $("#downArrow").css("top", parseFloat( $("#downArrow").css("top")) + arrowMovement);
    numberOfDirs++;
    if(numberOfDirs >= 8){
        if(reverse){
            arrowMovement = -2;
            numberOfDirs = 4;
            reverse = false;
        }
        else {
            arrowMovement = 1;
            numberOfDirs = 0;
            reverse = true;
        }
        
    }

}, 100);

if($(window).width() < $(window).height()){
    $(".container").css("top", "120vh");
    $("body").css("overflow", "initial");
}

else {
    let checkScroll = true;
    let scrollSpeed = 3.5;
    let opacitySpeed = (1 - 0.05) * scrollSpeed / 100;
    $(window).bind('mousewheel DOMMouseScroll', function(event){
        if(checkScroll){
            if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
                console.log('scroll up');
                if(parseInt($(".container").css("top")) < $(window).height()){
                    $(".earth").animate({opacity: `+=${opacitySpeed}`}, 0)
                    $(".container").animate({top: `+=${scrollSpeed}vh`}, 0)
                    $(".aboutMeHeadingContainer").css("opacity", $(".earth").css("opacity"));
                    $("#downArrowContainer").css("opacity", $(".earth").css("opacity"));
                    //checkScroll = false;
                }
            }
            else {
                console.log('scroll down');
                if(parseInt($(".container").css("top")) - scrollSpeed * $(window).height() / 100 > 0) {
                    if(parseFloat($(".earth").css("opacity")) > 0.05){
                        $(".earth").animate({opacity: `-=${opacitySpeed}`}, 0)
                    }
                    //checkScroll = false;
                    $(".container").animate({top: `-=${scrollSpeed}vh`}, 0)
                }
                else {
                    $(".aboutMeHeadingContainer").css("opacity", 0);
                    $("#downArrowContainer").css("opacity", 0);
                }
            }
        }

    });
    setInterval(function(){checkScroll = true;},0.00001);
}