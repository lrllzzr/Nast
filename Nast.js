// $(document).ready(function(){
//     $("#flip1").mouseover(function(){
//         $(".container1").toggle();
//     });
// });
//
// $(document).ready(function(){
//     $("#flip2").mouseover(function(){
//         $(".container2").toggle();
//     });
// });


function SetTitle() {
document.write('<div id="title">Astronomy World</div>');
}

var banner = ['Main','Sun','Moon','Universe','Theory of relativity','Kurzgesagt'];

function Set_banner_name(i){
  document.write('<div id="banner_names">'+banner[i]+'</div>');
}

function Set_banner_Main_image(){
  document.write('<img id="banner_imgs" src="images/main.png">');
}
function Set_banner_Sun_image(){
  document.write('<img id="banner_imgs" src="images/MovingSun.gif">');
}
function Set_banner_Moon_image(){
  document.write('<img id="banner_imgs" src="images/MovingMoon.gif">');

}
function Set_banner_Universe_image(){
  document.write('<img id="banner_imgs" src="images/giphy.gif">');
}
function Set_banner_theory_image(){
  document.write('<img id="banner_imgs" src="images/Einstein.gif">');
}

function Set_banner_Kurzgesagt_image(){
  document.write('<img id="banner_imgs" src="images/Kurzgesagt.jpg">');
}
