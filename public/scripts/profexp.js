console.log('about')
let checkScroll = false;
$(window).bind('mousewheel DOMMouseScroll', function(event){
    if(checkScroll){
        let pos = parseInt($("#jupiter").css("top"));
        if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
            console.log('scroll up');          
        }
        else {
            console.log('scroll down');
        }
        checkScroll = false;
    }
});
setInterval(function(){checkScroll = true}, 1500);

let starDestroyerInterval = setInterval(function(){
    let starDestroyer = $("#destroyer");
    let posX = parseInt(starDestroyer.css("left"));
    let posY = parseInt(starDestroyer.css("top"));

    starDestroyer.css("left", posX + 5);
    starDestroyer.css("top", posY + 1);
}, 10)

$(".companyTitleBox").css("height", $(".logo").css("height"))
