if($(window).width() > $(window).height()){
    let checkScroll = true;
    let scrollSpeed = 10;
    let opacitySpeed = (1 - 0.05) * scrollSpeed / (parseFloat($("#bigBox").css("height")) / $(window).height() * 100);
    $(window).bind('mousewheel DOMMouseScroll', function(event){
        if(checkScroll){
            if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
                console.log('scroll up');
                if(parseInt($("#bigBox").css("top")) < $(window).height()){
                    $("#bigBox").animate({top: `+=${scrollSpeed}vh`}, 0)
                    let opacity = 1;
                    if(parseFloat($("#bigBox").css("top")) >= $(window).height()){
                        opacity = 1;
                        $("#downArrowContainer").css("opacity",1);
                    }
                    else if (parseFloat($("#bigBox").css("top")) <= $(window).height() / 4){
                        opacity = 0.05;
                    }
                    else {
                        opacity = ((1-0.05) / ($(window).height() - $(window).height() / 4) * parseFloat($("#bigBox").css("top"))) + (0.09 - 0.95 / 3);
                        $("#downArrowContainer").css("opacity",opacity);
                    }
                    if(parseFloat($("#bigBox").css("top")) >= $(window).height() * 3 /4){
                        $("#headingBox").css("display", "initial");
                    }
                    $(".parallax").animate({opacity: opacity}, 0)
                    $("#headingBox").css("opacity", $(".parallax").css("opacity"));
                    //checkScroll = false;
                }
            }
            else {
                console.log('scroll down');
                if(parseInt($("#bigBox").css("bottom")) < 0) {
                    $("#bigBox").animate({top: `-=${scrollSpeed}vh`}, 0)
                    if(parseFloat($(".parallax").css("opacity")) > 0.05){
                        let opacity = 1;
                        if(parseFloat($("#bigBox").css("top")) >= $(window).height()){
                            opacity = 1;
                        }
                        else if (parseFloat($("#bigBox").css("top")) <= $(window).height() / 4){
                            opacity = 0.05;
                            $("#downArrowContainer").css("opacity",0);
                            $("#headingBox").css("display", "none");
                        }
                        else {
                            opacity = ((1-0.05) / ($(window).height() - $(window).height() / 4) * parseFloat($("#bigBox").css("top"))) + (0.09 - 0.95 / 3);
                            $("#downArrowContainer").css("opacity",opacity);
                        }
                        $(".parallax").animate({opacity: opacity}, 0)
                        $("#headingBox").css("opacity", $(".parallax").css("opacity"));
                        
                    }
                    //checkScroll = false;
                }
                else {
                    $(".headingBox").css("opacity", 0);
                    $("#downArrowContainer").css("opacity", 0);
                }
            }
        }

    });
    setInterval(function(){checkScroll = true;},0.00001);
}