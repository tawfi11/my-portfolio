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
window.mobileAndTabletCheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  };
  
if(!mobileAndTabletCheck){
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