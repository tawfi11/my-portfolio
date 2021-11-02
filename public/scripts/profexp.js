console.log('about')
let checkScroll = false;
$(window).bind('mousewheel DOMMouseScroll', function(event){
    if(checkScroll){
        let pos = parseInt($("#jupiter").css("top"));
        if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
            console.log('scroll up');          
        }
        else {
            console.log('scroll down');
        }
        checkScroll = false;
    }
});
setInterval(function(){checkScroll = true}, 1500);

let starDestroyerInterval = setInterval(function(){
    let starDestroyer = $("#destroyer");
    let posX = parseInt(starDestroyer.css("left"));
    let posY = parseInt(starDestroyer.css("top"));

    starDestroyer.css("left", posX + 5);
    starDestroyer.css("top", posY + 1);
}, 10)

$(".companyTitleBox").css("height", $(".logo").css("height"))

const companyLogos = ['ansyslogo.png', 'openroboticslogo.png', 'intellogo.png', 'ubclogo.png', 'rocsollogo.png', 'ubcorbitlogo.png']
const companyTitles = ['Ansys Ltd.', 'UBC Open robotics', 'Intel Corporation', 'University of British Columbia', 'Rocsol Tech', 'UBC Orbit']
const positionTitle = ['Electronics R&D - 3D Gui', 'Electrical Sub-Team Home Bot', 'Power Efficiency Engineering Intern', 'APSC 160 Teaching Assistant', 'Software Engineering Intern', 'Structure Sub-Team Alea SAT']
const timeLine = ['Aug 2021 - PRESENT', 'Sept 2021 - PRESENT', 'Jan 2021 - Aug 2021', 'Sept 2020 - April 2021', 'May 2020 - Sept 2020', 'Sept 2018 - April 2020']
const color = ["180, 130, 30", "190,0,1", "2, 145, 255", "210,178,44", "7,99,36", "19, 83, 180"]

const listContent = [
    //Ansys
    "<li>Implemented compatability with latest MATLAB/Simulink version and desktop software using C++</li><br>\
    <li>Modeled four complicated 2D/3D toroid structures on CAD and ran eddy current analysis using defined excitations and calculated resultant torque</li><br>\
    <li>Eliminated 95% of build warnings and errors in Maxwell EDT Software in C++</li>",

    //UBC Open Robotics
    "<li>Designed, built, and tested force-sensitive resistor Arduino circuit to be used as a force-meter on robotic claw</li><br>\
    <li>Analyzed capacitor placement in robot claw circuit, mathematically chose best capacitance values for capacitors in the circuit</li>",

    //Intel
    "<li>Created and trained a TensorFlow dense neural network regression model to calculate data leakage power with over 75% accuracy given cell counts and areas as inputs</li><br>\
    <li>Utilized Apache’s PySpark Machine Learning to create and train a linear regression model pipeline that calculates leakage power given cell counts and areas as inputs with over 70% accuracy</li><br>\
    <li>Debugged SV module using Ansys PowerArtist to reduce number of unknown nets from 100,000+ to ~1000</li><br>\
    <li>Solved critical timing errors and ran analysis tests on verilog modules</li>",

    //UBC TA
    "<li>Ran office hours and mentored over 100 students on the basic principles of programming, and software engineering in C</li><br>\
    <li>Created presentations for over 200 students on topics such as stack memory theory, variable memory allocation, heap and stack memory, binary trees, sorting, data structures, and runtime optimization in C</li>",

    //Rocsol
    "<li>Created integral application in C# to utilize user inpt data and generate a dynamic diagram showcasing the output of the program in a visualize manner</li><br>\
    <li>Created animation in C# to read output data from DWOB software and generate a dynamic animation showcasing the path of the drill bit inside the wall and the rock fracture points</li><br>\
    <li>Debugged over 100 critical build errors in DWOB software</li>",

    //UBC Orbit
    "<li>Created python script to convert irradiance values of CSV file into temperature data and used the data to perform Ansys thermal simulations</li><br>\
    <li>Overhauled casing design of sattelite on SolidWorks so internal compartments may be more efficiently accessed</li>"
]

function buttonChange(input, doneAlr){
    let i = parseInt(input.value);
    $("#textbox").css("border", `10px solid rgba(${color[i]}, 0.507)`)

    $(".logo").attr('src', `Imgs/logos/${companyLogos[i]}`)
    $(".companyTitleBox").css("height", $(".logo").css("height"))
    $(".companyTitleBox").html(`<h1>${companyTitles[i]}</h1>`)
    $(".companyTitleBox").css("background", `rgb(${color[i]})`)

    $(".positionBox").html(`<h2><i><b>${positionTitle[i]}</b></i></h2>
    <h3><b>${timeLine[i]}</b></h3>`)

    $("h3").css("text-shadow", `0 0 1px rgb(${color[i]})`)
    $(".infoList").html(listContent[i])
    $(".companyTitleBox").css("height", $(".logo").css("height"))
    $(".companyTitleBox").css("height", $(".logo").css("height"))
    console.log($(".companyTitleBox").css("height"))
}