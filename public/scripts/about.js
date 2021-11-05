let meArr = [];
for(let i = 0; i < 5; i++){
    meArr.push(`Imgs/me/${i}.jpg`);
}

let i = 1;
setInterval(function(){
    $("#me").fadeOut(1000);
    setTimeout(function(){
        $("#me").attr("src", meArr[i]);
    }, 1000);
    $("#me").fadeIn(1000);
    i+=1;
    if(i > 4){
        i = 0;
    }
}, 8000);

if($(window).height() > $(window).width()){
    $(".nav-item").css("margin-left","");
}