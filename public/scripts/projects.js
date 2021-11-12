if($(window).height() < $(window).width()){
    let speed = 5;
    function switchRow(index, oldIndex) {
        if(index === -1 ){
            $("#headerBox").css("display", "initial");
        }
        else {
            $("#headerBox").css("display", "none");
        }
        let properPosY = index >= 0 ? parseFloat($(`.pos${index}`).css("top")) : parseFloat($(`.pos${oldIndex}`).css("top"));
        if(index === 0 && oldIndex === -1){
            let newRow = $(`.pos${index}`);
            newRow.fadeIn(200);
            newRow.css("top", $(window).height())
            $("#downArrowContainer").css("display", "none");
            $("#upArrowContainer").css("display", "none");
            let interval = setInterval(function(){
                newRow.css("top", parseFloat(newRow.css("top")) - speed);
                if(parseFloat(newRow.css("top")) <= properPosY){
                    newRow.css("top", properPosY);
                    checkScroll = true;
                    clearInterval(interval);
                    $("#downArrowContainer").css("display", "initial");
                    $("#upArrowContainer").css("display", "initial");
                }
            }, 1);
        }
        else if(index === -1 && oldIndex === 0){
            let oldRow = $(`.pos${oldIndex}`);
            oldRow.fadeOut(200);
            let interval = setInterval(function(){
                oldRow.css("top", parseFloat(oldRow.css("top")) + speed);
                $("#downArrowContainer").css("display", "none");
                $("#upArrowContainer").css("display", "none");
                if(parseFloat(oldRow.css("top")) >= $(window).height()){
                    oldRow.css("top", properPosY);
                    checkScroll = true;
                    clearInterval(interval);
                    $("#downArrowContainer").css("display", "initial");
                    $("#upArrowContainer").css("display", "none");
                }
            }, 1);
        }
        else if(index > oldIndex){
            let newRow = $(`.pos${index}`);
            let oldRow = $(`.pos${oldIndex}`);
            newRow.fadeIn(500);
            oldRow.fadeOut(500);
            newRow.css("top", $(window).height());
            let interval = setInterval(function(){
                newRow.css("top", parseFloat(newRow.css("top")) - speed);
                oldRow.css("top", parseFloat(oldRow.css("top")) - speed);
                $("#downArrowContainer").css("display", "none");
                $("#upArrowContainer").css("display", "none");
                if(parseFloat(newRow.css("top")) <= properPosY){
                    newRow.css("top", properPosY);
                    oldRow.css("top", properPosY);
                    checkScroll = true;
                    clearInterval(interval);
                    if(index === 1){
                        $("#downArrowContainer").css("display", "none");
                         $("#upArrowContainer").css("display", "initial");
                    }
                }
            }, 1)
        }
        else{
            let newRow = $(`.pos${index}`);
            let oldRow = $(`.pos${oldIndex}`);
            newRow.fadeIn(500);
            oldRow.fadeOut(500);
            newRow.css("top", 0 - parseFloat(newRow.css("height")));
            let interval = setInterval(function(){
                newRow.css("top", parseFloat(newRow.css("top")) + speed);
                oldRow.css("top", parseFloat(oldRow.css("top")) + speed);
                $("#downArrowContainer").css("display", "none");
                $("#upArrowContainer").css("display", "none");
                if(parseFloat(newRow.css("top")) >= properPosY){
                    newRow.css("top", properPosY);
                    oldRow.css("top", properPosY);
                    checkScroll = true;
                    clearInterval(interval);
                    $("#downArrowContainer").css("display", "initial");
                    $("#upArrowContainer").css("display", "initial");
                }
            }, 1) 
        }
    }

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

    let i = -1;
    checkScroll = true;
    $(window).bind('mousewheel DOMMouseScroll', function(event){
        if(checkScroll){
            let oldIndex = i;
            if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
                console.log('scroll up');
                if(i > -1){
                    i -= 1;
                }
            }
            else {
                console.log('scroll down');
                if(i < 1){
                    i += 1;
                }
            }
            if(oldIndex !== i){
                checkScroll = false;
                console.log(i, oldIndex);
                switchRow(i, oldIndex);
            }
        }
    });

    document.onkeydown = function(e) {
        if(checkScroll){
            let oldIndex = i;
            switch(e.which) {
                case 37: // left
                    if(i > -1){
                        i -= 1;
                    }
                break
                case 40: // down
                    if(i < 1){
                        i += 1;
                    }
                break;
                case 39: // right
                    if(i < 1){
                        i += 1;
                    }
                break;
                case 38: // up
                    if(i > -1){
                        i -= 1;
                    }
                break;
                default: return; // exit this handler for other keys
            }
            e.preventDefault(); // prevent the default action (scroll / move caret)
            if(oldIndex !== i){
                switchRow(i, oldIndex);
                checkScroll = false;
            }   
        }
    };

    $("#downArrowContainer").click(function(e){
        i += 1;
        switchRow(i, i-1);
    })

    $("#upArrowContainer").click(function(e){
        i -= 1;
        switchRow(i, i+1);
    })
}