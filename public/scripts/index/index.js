let checkScroll = true;
let state = 1;
let oldState = 0;
let returnState = 1;
let canMove = true;
$(".page").css("display", "none");
$(`#state${state}`).css("display", "inline");

$(window).bind('mousewheel DOMMouseScroll', function(event){
    if(checkScroll && canMove){
        //console.log(state);
        let scrollDir = 0;
        if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
            //console.log('scroll up');
            scrollDir = 1;
        }
        else {
            //console.log('scroll down');
            scrollDir = -1;
        }
        checkScroll = false;

        if(state == 1 || state == 0){
            state = state1(scrollDir);
        }
        else if(state == 2){
            state = state2(scrollDir);
        }
    }
});

setInterval(function(){checkScroll = true;},25);