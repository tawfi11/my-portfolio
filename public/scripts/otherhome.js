let shadowBox = []
let star = 1000, star2 = 500, star3 = 100;

if($(window).width() < $(window).height()){
    star /= 4;
    star2 = 0;
    star3  = 0;
    let planetsArr = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'];
    let planetSize = [1.5, 2, 4, 2, 30, 4.5, 6, 3];
    let i = 0;
    planetsArr.forEach(function(planet){
        $(`#${planet}`).css('width', (planetSize[i] + 1) * $(window).height() / 100);
        i+=1;
        
        $(".nav-item").css("margin-left","");
        
    })
}

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

window.scrollTo({
    top: 0
});

$($(".nav-item")[2]).hover(function(){
    $("#jupiter").css("filter", "drop-shadow(0px 0px 30px white)");
}, function(){
    $("#jupiter").css("filter", "");
})

$($(".nav-item")[1]).hover(function(){
    $("#earth").css("filter", "drop-shadow(0px 0px 30px white)");
}, function(){
    $("#earth").css("filter", "");
})