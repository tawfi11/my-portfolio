//ScrollDir = -1 --> scrolling UP
//ScrollDir = 1 --> scrolling DOWN
//ScrollDir = 0 --> no scroll

//state 1 solar system --> ABOUT ME page (state 3)
function state1(scrollDir, oldState){
    const scrollSpeed = 5;
    const opacitySpeed = 0.05;
    let opacity = parseFloat($(`#state1`).css("opacity"));
    let y = parseFloat($(`#state1`).css("top"));
    returnState = 1;
    if(scrollDir == -1){
        if(oldState == 0){
            if(opacity - opacitySpeed >= 0){
                opacity -= opacitySpeed;
                y -= scrollSpeed;
                console.log(opacity);
            }
            else {
                opacity = 0;
                y = 0;
                $("#state1").css("display", "none");
                $("#state3").css("display", "inline");
                let state3Y = 1 / opacitySpeed * scrollSpeed;
                $("#state3").css("top", `${state3Y}px`);
                returnState = 3;
            }
        }
    }
    else if(scrollDir == 1){
        if(oldState == 0){
            if(opacity + opacitySpeed <= 0.75){
                opacity += opacitySpeed;
                y += scrollSpeed;
            }
        }
    }
    $("#state1").css("opacity", opacity);
    $("#state1").css("top", `${y}px`);
    return returnState;
}

//ABOUT ME => Who I am (state 3) --> ABOUT ME => Exerpt (state 5)
//ABOUT ME => Who I am (state 3) --> solar system (state 2) 
function state2(scrollDir){
    const scrollSpeed = 5;
    const opacitySpeed = 0.05;
    
}