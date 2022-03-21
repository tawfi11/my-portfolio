//ScrollDir = -1 --> scrolling DOWN
//ScrollDir = 1 --> scrolling UP
//ScrollDir = 0 --> no scroll
const opacitySpeed = 0.05;
const scrollSpeed = 5;
const opacityLimit = 0.75;

function colorCorrection(location){
    $(".nav-link").css("color", "grey");
    $(`#${location}Btn`).css("color", "yellow");
    return;
}

function stateTransition(newState, oldState, location){
    $(`#${oldState}`).css("display", "none");
    $(`#${newState}`).css("display", "initial");
    $(`#${newState}`).css("opacity", 0);
    $(`#${newState}`).css("top", "0px");
    canMove = false;
    colorCorrection(location);
    $(`#${newState}`).fadeTo("slow", opacityLimit, function(){
        canMove = true;
    });
    return;
}

//state 1 solar system --> ABOUT ME page (state 3)
function state1(scrollDir){
    colorCorrection("Home");
    let opacity = parseFloat($(`#state1`).css("opacity"));
    let y = parseFloat($(`#state1`).css("top"));
    returnState = 1;
    if(scrollDir == -1){
        if(opacity - opacitySpeed >= 0){
            opacity -= opacitySpeed;
            y -= scrollSpeed;
            //console.log(opacity);
        }
        else {
            opacity = 0;
            y = 0;
            /*$("#state1").css("display", "none");
            $("#state2").css("display", "initial");
            $("#state2").css("opacity", 0);
            $("#state2").css("top", "0px");
            canMove = false;
            $(".nav-link").css("color", "grey");
            $("#AboutBtn").css("color", "yellow");
            $("#state2").fadeTo("slow", opacityLimit, function(){
                canMove = true;
            });*/
            stateTransition("state2", "state1", "About");
            returnState = 2;
            //$("#state2").css("display", "inline");
            //let state3Y = 1 / opacitySpeed * scrollSpeed;
            //$("#state2").css("top", `${state3Y}px`);
            
        }
    }
    else if(scrollDir == 1){
        if(opacity + opacitySpeed <= opacityLimit){
            opacity += opacitySpeed;
            y += scrollSpeed;
        }
        
    }
    $("#state1").css("opacity", opacity);
    $("#state1").css("top", `${y}px`);
    return returnState;
}

//ABOUT ME => Who I am (state 2) --> ABOUT ME => Exerpt (state 3)
//ABOUT ME => Who I am (state 2) --> solar system (state 1) 
function state2(scrollDir){
    colorCorrection("About");
    let opacity = parseFloat($(`#state2`).css("opacity"));
    let y = parseFloat($(`#state2`).css("top"));
    returnState = 2;
    if(scrollDir == -1){
        y-= scrollSpeed;
        if(y <= 0){
            opacity -= opacitySpeed;
            if(opacity <= 0){ // Transition into solar system
                opacity = 0;
                y = 0;
                /*$("#state2").css("display", "none");
                $("#state3").css("top", "0px");
                canMove = false;
                $("#state3").fadeTo("slow", opacityLimit, function(){
                    canMove = true;
                });*/
                stateTransition("state3", "state2", "Education");
                returnState = 3;
            }
        }
        else {
            opacity += opacitySpeed;
        }
    }
    else if(scrollDir == 1){
        y+= scrollSpeed;
        if(y >= 0){
            opacity -= opacitySpeed;
            if(opacity <= 0){ // Transition into solar system
                opacity = 0;
                y = 0;
                /*$("#state2").css("display", "none");
                $("#state1").css("top", "0px");
                canMove = false;
                $(".nav-link").css("color", "grey");
                $("#HomeBtn").css("color", "yellow");
                $("#state1").fadeTo("slow", opacityLimit, function(){
                    canMove = true;
                });*/
                stateTransition("state1", "state2", "Home");
                returnState = 1;
            }
        }
        else {
            opacity += opacitySpeed;
        }
    }
    $("#state2").css("opacity", opacity);
    $("#state2").css("top", `${y}px`);
    return returnState;
}