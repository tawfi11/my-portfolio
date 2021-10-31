$("#head1").fadeIn(1000);
$("#head2").fadeIn(2000);

let shadowBox = []
for(let i = 0; i < 100; i++){
    shadowBox.push(`${Math.random() * 100}vw ${Math.random() * 100}vh #FFF`)
}

let shadowBox2 = []
for(let i = 0; i < 50; i++){
    shadowBox2.push(`${Math.random() * 100}vw ${Math.random() * 100}vh #FFF`)
}

let shadowBox3 = []
for(let i = 0; i < 50; i++){
    shadowBox3.push(`${Math.random() * 100}vw ${Math.random() * 100}vh #FFF`)
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