console.log('about')
let checkScroll = false;
let animInterval;
let animationCompleted = false;
$(window).bind('mousewheel DOMMouseScroll', function(event){
    if(checkScroll){
        let pos = parseInt($("#jupiter").css("top"));
        if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
            console.log('scroll up');
            if(!animationCompleted){
                animInterval = setInterval(animation1, 10);
                setTimeout(function(){
                    clearInterval(animInterval)
                    animationCompleted = true;
                }, 2500);
            }
            
        }
        else {
            console.log('scroll down');
        }
        checkScroll = false;
    }
});

let rotate = 1;
function animation1(){
    let jupiter = $("#jupiter");
    jupiter.css("top", parseInt(jupiter.css("top")) + 1)
    jupiter.css("transform", `rotate(${rotate}deg)`);
    jupiter.css("width", parseInt(jupiter.css("width")) + 7);
    rotate += 0.5
}

setInterval(function(){checkScroll = true}, 1500);