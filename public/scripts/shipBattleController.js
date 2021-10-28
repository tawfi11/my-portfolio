const actions = {
    65: "left",
    68: "right",
    87: "up",
    83: "down",
    38: "up",
    40: "down",
    39: "right",
    37: "left",
    32: "shoot"
}
let speed = 15;
let fireSpeed = 10;
let oldShotTopPos = [$(".shot_top").css("left"), $(".shot_top").css("top")];
let oldShotBottomPos = [$(".shot_bottom").css("left"), $(".shot_bottom").css("top")];
let cooldown = false;
let blasterIndex = 0;
console.log($(window).width() + " " + $(window).height());
$(window).keydown(function(e){
    let action = actions[e.which];
    let shipPosX = $("#ship")[0].offsetLeft;
    let shipPosY = $("#ship")[0].offsetTop;
    let shipWidth = $(".ship_img")[0].offsetWidth;
    let shipHeight = $("#ship")[0].offsetHeight;

    if(action == "left" && shipPosX - speed > 0){
        let x = parseInt($("#ship").css("left").replace("%", ""))
        $("#ship").css("left", `${x - speed}px`)
    }
    if(action === "right" && (shipPosX + shipWidth + speed < $(window).width() / 2)){
        let x = parseInt($("#ship").css("left").replace("%", ""))
        $("#ship").css("left", `${x + speed}px`)
    }
    if(action === "up" && (shipPosY - speed > 0)){
        let y = parseInt($("#ship").css("top"));
        $("#ship").css("top", `${y - speed}px`)
    }
    if(action === "down" && (shipPosY + shipHeight + speed < $(window).height())){
        let y = parseInt($("#ship").css("top"));
        $("#ship").css("top", `${y + speed}px`)
        console.log($("#ship").css("top"))
    }
    if(action === "shoot" && !cooldown){
        oldShotTopPos = [$(".shot_top").css("left"), $(".shot_top").css("top")];
        oldShotBottomPos = [$(".shot_bottom").css("left"), $(".shot_bottom").css("top")];
        $(".shot_top").css("display", "initial");
        $(".shot_bottom").css("display", "initial");

        let shotInterval = setInterval(function(){
            cooldown = true;
            let topX = parseInt($(".shot_top").css("left"));
            let bottomX = parseInt($(".shot_bottom").css("left"))
            $(".shot_top").css("left", `${topX + fireSpeed}px`);
            $(".shot_bottom").css("left", `${bottomX + fireSpeed}px`);

            if($(".shot_top")[0].offsetWidth + speed + $(".shot_top")[0].offsetLeft >= $(window).width() - speed|| 
            $(".shot_bottom")[0].offsetWidth + speed + $(".shot_bottom")[0].offsetLeft >= $(window).width() - speed){
                clearInterval(shotInterval);
                $(".shot_top").css("left", oldShotTopPos[0]);
                $(".shot_top").css("top", oldShotTopPos[1]);
                $(".shot_bottom").css("left", oldShotBottomPos[0]);
                $(".shot_bottom").css("top", oldShotBottomPos[1]);

                $(".shot_top").css("display", "none");
                $(".shot_bottom").css("display", "none");

                cooldown = false;
            }
        }, 1)
    }
})

let i = 0;
setInterval(function(){
    $(".exhaust_top").attr("src", `Imgs/ship/Ship_Effects/Exhaust/Exhaust_1_00${i}.png`);
    $(".exhaust_bottom").attr("src", `Imgs/ship/Ship_Effects/Exhaust/Exhaust_1_00${i}.png`);
    i += 1;
    if(i >= 9){
        i = 0;
    }
}, 10)


/// PSEUDO % VALUES FOR PIXELS ///
const refDimension = 2880;
function pseudoPercentage(query, property){
    $(query).css(property, `${parseInt($(query).css(property).replace("px", "")) * $(window).width() / refDimension}px`);
}
/*pseudoPercentage(".ship_img", "max-width");
pseudoPercentage(".exhaust_top", "max-width");
pseudoPercentage(".exhaust_top", "top");
pseudoPercentage(".exhaust_top", "left");
pseudoPercentage(".exhaust_bottom", "max-width");
pseudoPercentage(".exhaust_bottom", "top");*/
