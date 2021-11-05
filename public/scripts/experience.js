let jobList = ["me", "ansys", "robotics", "intel", "ubc", "rocsol", "orbit"];
function fixStuff(){
    let logoWidth = parseFloat($(".logo").css("width"));
    let textWidth = $(window).width() - logoWidth - 30;
    $(".textBox").css("width", textWidth);
    let logoHeight = $(".logo").outerHeight();
    let textHeight = $(".textBox").outerHeight();
    if(logoHeight >= textHeight){
        $(".job").css("height", parseFloat($(".logo").css("height")) + 20)
    }
    else {
        $(".job").css("height", parseFloat($(".textBox").css("height")) + 40)
    }
}

function switchJob(oldIndex, i){
    let colors = ["rgb(137, 20, 184)", "rgb(255,183,27)", "rgb(189,4,3)", "rgb(0,105,183)", "rgb(210,178,44)", "rgb(7,99,36)", "rgb(199,233,231)"];
    $(`#${jobList[oldIndex]}_job`).fadeOut();
     $(`#${jobList[i]}_job`).fadeIn("slow");
     $(".outer-circle").css("background", "black");
    $($(".outer-circle")[i]).css("background-color", colors[i]);
    $(".outer-circle").css("box-shadow", "0 0 0 0 transparent");
    $($(".outer-circle")[i]).css("box-shadow", `0 0 12px 7px ${colors[i]}`);
    $(".outer-circle").css("border-color", "rgb(70, 70, 70)");
    $($(".outer-circle")[i]).css("border-color", "black");
}

if($(window).width() > $(window).height()){
    fixStuff();
    $(".job").css({"display" : "none", "top" : "25vh", "position" : "absolute"});
    $(".parallaxHalf").remove();
    $(".parallax").remove();
    $("body").css({
        "background-image": 'url("../Imgs/planets/jupiterWallpaper.png")', 
        "height" : "100%",
        "background-attachment": "fixed",
        "background-position": "center",
        "background-repeat": "no-repeat",
        "background-size": "cover"
    });
    let i = 0;
    $(`#${jobList[i]}_job`).css({
        "display" : "initial", 
        "top": "25vh",
        "position" : "absolute"});
    fixStuff();
    
    let checkScroll = true;
    setInterval(function(){checkScroll = true}, 1000);
    $(window).bind('mousewheel DOMMouseScroll', function(event){
        if(checkScroll){
            let oldIndex = i;
            if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
                console.log('scroll up');
                if(i > 0){
                    i -= 1;
                }
            }
            else {
                console.log('scroll down');
                if(i < jobList.length-1){
                    i += 1;
                }
            }
            if(oldIndex !== i){
                switchJob(oldIndex, i);
                checkScroll = false;
            }
            

        }
    });
    558

    document.onkeydown = function(e) {
        let oldIndex = i;
        switch(e.which) {
            case 37: // left
                if(i > 0){
                    i -= 1;
                }
                
            break;

            case 40: // down
                if(i < jobList.length - 1){
                    i += 1;
                }
            break;

            case 39: // right
                if(i < jobList.length - 1){
                    i += 1;
                }
            break;

            case 38: // up
                if(i > 0){
                    i -= 1;
                }
            break;

            default: return; // exit this handler for other keys
        }
        console.log(e.which);
        e.preventDefault(); // prevent the default action (scroll / move caret)
        if(oldIndex !== i){
            switchJob(oldIndex, i);
        }
    };

    $(".outer-circle").click(function(e){
        let oldIndex = i;
        i = parseInt(e.target.id)
        if(oldIndex !== i){
            switchJob(oldIndex, i);
        }
    })
    
}
else {
    $("#progress").remove();
    $("#desktopTutorial").remove();
    jobList.forEach(function(job){
        let jobHeight = $(`#${job}_textBox`).offset().top + $(`#${job}_textBox`).outerHeight() - $(`#${job}_job`).offset().top;
        $(`#${job}_job`).css("height", jobHeight);
    })
    
}