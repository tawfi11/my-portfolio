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