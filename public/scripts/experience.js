let jobList = ["me", "ansys", "intel", "ubc", "rocsol"];
let imageHeight = $(".logo")[0].clientHeight
function fixStuff(i){
    let j = ((i - 1) >= 0) ? i - 1 : 0;
    let logoWidth = parseFloat($($($(".logo")[j])[0]).css("width"));
    let textWidth = $(window).width() - logoWidth - 30;
    $(`#${jobList[i]}_textBox`).css("width", textWidth);
    let logoHeight =  parseFloat($($($(".logo")[j])[0]).css("height"));
    let textHeight = $(`#${jobList[i]}_textBox`).outerHeight();
    console.log(logoHeight >= textHeight);
    /*if(logoHeight >= textHeight){
        $(".job").css("height", logoHeight + 20)
    }
    else {
        $(".job").css("height", textHeight + 30)
    }*/
    $(".job").css("height", logoHeight + 30)
}
let checkScroll = true;
function switchJob(oldIndex, i){
    $("#downArrowContainer").css("display", "none");
    $("#upArrowContainer").css("display", "none");
    $(`#${jobList[oldIndex]}_job`).fadeOut(300, "swing");
     $(`#${jobList[i]}_job`).fadeIn(300, "swing");
     let direction = (i > oldIndex) ? -1 : 1;
     console.log(jobList[i])

     if(direction === -1){
        $(`#${jobList[i]}_job`).css("position", "absolute");
        $(`#${jobList[i]}_job`).css("top", $(window).height());
     } else { 
        $(`#${jobList[i]}_job`).css("top", -imageHeight);
        $(`#${jobList[i]}_job`).css("position", "absolute");
     }
     let oldPos = parseFloat(  $(`#${jobList[i]}_job`).css("top"))
    
     let interval = setInterval(function(){
        let current = $(`#${jobList[i]}_job`), old = $(`#${jobList[oldIndex]}_job`);
        let speed = 4 * parseFloat(current.css("top")) / oldPos;
        speed = 4
        current.css("top", parseInt(current.css("top")) + (direction * speed));
        old.css("top", parseInt(old.css("top")) + (direction * speed));
        if((parseFloat(current.css("top")) <= $(window).height() / 4 && direction == -1) || ((parseFloat(current.css("top")) >= $(window).height() / 4 && direction == 1))){
            checkScroll = true;
            if(i < jobList.length - 1){
                $("#downArrowContainer").css("display", "initial");
            }
            if(i > 0){
                $("#upArrowContainer").css("display", "initial");
            }
            clearInterval(interval);
        }
    }, 1)
    if(i > 0)
        fixStuff(i);
}

if($(window).width() > $(window).height()){
    $("html").css("overflow", "hidden");
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
    $("#me_job").css("height", imageHeight);
    $(`#${jobList[i]}_job`).css({
        "display" : "initial", 
        "top": "25vh",
        "position" : "absolute"});    
    
    $(window).bind('mousewheel DOMMouseScroll', function(event){
        console.log(i);
        if(checkScroll){
            let oldIndex = i;
            if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
                console.log('scroll up');
                if(i > 0){
                    i -= 1;
                    checkScroll = false;
                }
            }
            else {
                console.log('scroll down');
                if(i < jobList.length-1){
                    i += 1;
                    checkScroll = false;
                }
            }
            if(oldIndex !== i){
                switchJob(oldIndex, i);
            }
            

        }
    });

    document.onkeydown = function(e) {
        if(checkScroll){
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
                checkScroll = false;
            }
            
        }
        
    };

    $(".outer-circle").click(function(e){
        let oldIndex = i;
        i = parseInt(e.target.id)
        if(oldIndex !== i){
            switchJob(oldIndex, i);
        }
    })



    $("#downArrow").click(function(e){
        i += 1;
        switchJob(i-1, i);
    })

    $("#upArrow").click(function(e){
        i -= 1;
        switchJob(i+1, i);
    })
}
else {
    $("#twinkling_stars").remove();
    $("#stars").remove();
    $("#stars2").remove();
    $("#me_jobh2").css("font-size", "100%");
    //$(".nav-item").css("margin-left","");
    $("#me_textBox").css({"left":"0vw", "top" : "10vh"});
    $("#me_jobh1").remove();
    $("#progress").remove();
    $(".job").css("border-radius", "0")
    $("#downArrowContainer").remove();
    $("#desktopTutorial").remove();
    jobList.forEach(function(job){
        let jobHeight = $(`#${job}_textBox`).offset().top + $(`#${job}_textBox`).outerHeight() - $(`#${job}_job`).offset().top;
        $(`#${job}_job`).css("height", jobHeight);
    })
    
}
let meTextRect = $("#me_textBox")[0].getBoundingClientRect();
let pos = $(window).width() / 2 - meTextRect.width / 2;
$("#me_textBox").css("left", pos);

let numberOfDirs = 0;
let arrowMovement = 1;
reverse = true;
let downArrInterval = setInterval(function(){
    $("#downArrow").css("top", parseFloat( $("#downArrow").css("top")) + arrowMovement);
    $("#upArrow").css("top", parseFloat( $("#upArrow").css("top")) - arrowMovement);
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