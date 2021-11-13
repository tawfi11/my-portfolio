$(window).load(function(){

    var body = $("body"),
        universe = $("#universe"),
        solarsys = $("#solar-system");
  
    var init = function() {
      body.removeClass('view-2D opening').addClass("view-3D").delay(2000).queue(function() {
        $(this).removeClass('hide-UI').addClass("set-speed");
        $(this).dequeue();
      });
    };
  
    var setView = function(view) { universe.removeClass().addClass(view); };
  
    $("#toggle-data").click(function(e) {
      body.toggleClass("data-open data-close");
      e.preventDefault();
    });
  
    $("#toggle-controls").click(function(e) {
      body.toggleClass("controls-open controls-close");
      e.preventDefault();
    });
  
    $("#data a").click(function(e) {
      var ref = $(this).attr("class");
      solarsys.removeClass().addClass(ref);
      $(this).parent().find('a').removeClass('active');
      $(this).addClass('active');
      e.preventDefault();
    });
  
    $(".set-view").click(function() { body.toggleClass("view-3D view-2D"); });
    $(".set-zoom").click(function() { body.toggleClass("zoom-large zoom-close"); });
    $(".set-speed").click(function() { setView("scale-stretched set-speed"); });
    $(".set-size").click(function() { setView("scale-s set-size"); });
    $(".set-distance").click(function() { setView("scale-d set-distance"); });
  
    init();
  
  });

let shadowBox = []
let star = 100, star2 = 50, star3 = 10;
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

$("#aboutLink").hover(function(){
  $("#aboutLink").css("color", "rgb(181,181,181)");
  $(".earth_link").css("box-shadow", "0 0 20px 5px white");
  $(".earth_link").css("border-radius", "20px");
}, function(){
  $("#aboutLink").css("color", "rgb(126,126,126)");
  $("#aboutLink").css("font-weight", "bold");
  $(".earth_link").css("box-shadow", "");
  $(".earth_link").css("border-radius", "");
})

$("#educationLink").hover(function(){
  $("#educationLink").css("color", "rgb(181,181,181)");
  $(".mars_link").css("box-shadow","10px 10px 40px 20px white");
}, function(){
  $("#educationLink").css("color", "rgb(126,126,126)");
  $("#educationLink").css("font-weight", "bold");
  $(".mars_link").css("box-shadow", "");
})

$("#experienceLink").hover(function(){
  $(".jupiter_link").css("box-shadow", "5px 5px 60px 60px white");
  $(".jupiter_link").css("border-radius", "500px");
  $("#experienceLink").css("color", "rgb(181,181,181)");
}, function(){
  $(".jupiter_link").css("box-shadow", "");
  $(".jupiter_link").css("border-radius", "");
  $("#experienceLink").css("color", "rgb(126,126,126)");
  $("#experienceLink").css("font-weight", "bold");
})

$("#projectsLink").hover(function(){
  $(".saturn_link").css("box-shadow", "0px 0px 100px 30px white");
  $(".saturn_link").css("border-radius", "500px");
  $("#projectsLink").css("color", "rgb(181,181,181)");
}, function(){
  $(".saturn_link").css("box-shadow", "");
  $(".saturn_link").css("border-radius", "");
  $("#projectsLink").css("color", "rgb(126,126,126)");
  $("#projectsLink").css("font-weight", "bold");
})




$(".earth_link").hover(function(){
  $("#aboutLink").css("color", "rgb(181,181,181)");
}, function(){
  $("#aboutLink").css("color", "rgb(126,126,126)");
  $("#aboutLink").css("font-weight", "bold");
})

$(".mars_link").hover(function(){
  $("#educationLink").css("color", "rgb(181,181,181)");
}, function(){
  $("#educationLink").css("color", "rgb(126,126,126)");
  $("#educationLink").css("font-weight", "bold");
})

$(".jupiter_link").hover(function(){
  $("#experienceLink").css("color", "rgb(181,181,181)");
}, function(){
  $("#experienceLink").css("color", "rgb(126,126,126)");
  $("#experienceLink").css("font-weight", "bold");
})

$(".saturn_link").hover(function(){
  $("#projectsLink").css("color", "rgb(181,181,181)");
}, function(){
  $("#projectsLink").css("color", "rgb(126,126,126)");
  $("#projectsLink").css("font-weight", "bold");
})