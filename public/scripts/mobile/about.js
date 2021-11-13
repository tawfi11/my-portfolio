let meArr = [];
for(let i = 0; i < 3; i++){
    meArr.push(`../Imgs/me/${i}.jpg`);
}

let i = 0;
setInterval(function(){
    $("#me").fadeOut(1000);
    setTimeout(function(){
        $("#me").attr("src", meArr[i]);
    }, 1000);
    $("#me").fadeIn(1000);
    i+=1;
    if(i > 2){
        i = 0;
    }
}, 8000);