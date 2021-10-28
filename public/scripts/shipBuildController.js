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
    }
})

$(".item").hide();
let pixelSize = parseInt($("#ship_img").css("max-height").replace("px",""))
$("#ship_img").css("max-height", `${window.innerHeight * pixelSize/866}px`);

let hud_item_img_px_size = parseInt($(".hud_item_img").css('max-height').replace("px",""));
$(".hud_item_img").css("max-height", `${window.innerHeight * hud_item_img_px_size / 866}px`)