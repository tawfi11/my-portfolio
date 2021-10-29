//const path = require('path');

class ship{
    static cabin;
    static engine;
    static weapon;
    static wing;
    static shipImg;
}

let old_target = ""
let shipImgArr = [0, 0, 0, 0];
ship.engine = shipImgArr[1];
ship.cabin = shipImgArr[0];
ship.weapon = shipImgArr[2];
ship.wing = shipImgArr[3];
let exhaustIndex = 0;
$(".selection").click(function(event){
    let target = event.currentTarget.id;
    if(target != old_target){
        $("#hud").slideUp(300);
    
        setTimeout(function(){
            
            //console.log(target);
            $(".selection").removeClass("selected");
            $(`#${target}`).toggleClass("selected");
            $(".item").hide();
            $(`.${target}_part`).toggle();

            let images = 3;
            if(target === "wing" || target == "cabin"){
                images = 2;
                $("#hud_item_img_3").hide();
            }

            for(let i = 1; i < images + 1; i++){
                $(`#hud_item_img_${i}`).show();
                $(`#hud_item_img_${i}`).attr("src", `Imgs/ship/Parts/${target}_${i-1}.png`);
            }

            $("#hud").slideDown(800);
        }, 400)
        old_target = target;
    }
})

$(".item").on("click", function(event){
    let oldArr = [...shipImgArr];
    let partName = `${old_target}_part`;
    let partID = parseInt(event.currentTarget.classList[2]);
    let index = -1;

    if(partName === "cabin_part"){
        index = 0;
    }
    else if(partName === "engine_part"){
        index = 1;
    }
    else if(partName === "weapon_part"){
        index = 2;
    }
    else if(partName === "wing_part"){
        index = 3;
    }
    shipImgArr[index] = partID;
   // console.log(shipImgArr);

    shipImgPath = `Imgs/ship/${shipImgArr.join('')}`;
    //console.log(shipImgPath);
    console.log(oldArr);
    console.log(shipImgArr);
    $("#ship_btn").attr("value", shipImgArr.join(''));
    if(shipImgArr.toString() !== oldArr.toString()){
        $("#ship_img").attr("src", `${shipImgPath}.png`);
        ship.engine = shipImgArr[1];
        ship.cabin = shipImgArr[0];
        ship.weapon = shipImgArr[2];
        ship.wing = shipImgArr[3];

        if(shipImgArr[1] === 1 || shipImgArr[1] === 2){
            $("#booster_left").css("display", "none");
            $("#booster_right").css("display", "none")
            $("#booster_mid").css("display", "initial");
        }
        else{
            $("#booster_left").css("display", "initial");
            $("#booster_right").css("display", "initial")
            $("#booster_mid").css("display", "none");
        }

    }
})

$(".item").hide();
let pixelSize = parseInt($("#ship_img").css("max-height").replace("px",""))
$("#ship_img").css("max-height", `${window.innerHeight * pixelSize/866}px`);

let hud_item_img_px_size = parseInt($(".hud_item_img").css('max-height').replace("px",""));
$(".hud_item_img").css("max-height", `${window.innerHeight * hud_item_img_px_size / 866}px`)

$("#selection_bar").css("height", $(".selection").css("height"));

let exhaustInterval = setInterval(function(){
    let engineExhaust = 1;
    if(ship.engine === 0){
        engineExhaust = 1;
    }
    else if(ship.engine === 1){
        engineExhaust = 2;
        $("#booster_mid").css("left","81.95%");
        $("#booster_mid").css("top","70%");
    }
    else if(ship.engine === 2){
        engineExhaust = 6;
        $("#booster_mid").css("left","81%");
        $("#booster_mid").css("top","70%");
    }
    $(".exhaust").attr("src", `Imgs/ship/Ship_Effects/Exhaust/Exhaust_${engineExhaust}_00${exhaustIndex}.png`);
    exhaustIndex += 1;
    if(exhaustIndex >= 9){
        exhaustIndex = 0;
    }
}, 10);