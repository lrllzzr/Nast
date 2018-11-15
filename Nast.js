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
document.title = 'Welcome!'



     // $(document).ready(function() {
     //
     //      $.ajax({
     //
     //           type: 'GET',
     //
     //           dataType: 'jsonp',
     //
     //           data: {'name': 'kimyeonsuk'},
     //
     //           url: 'https://www.youtube.com/watch?v=KsF_hdjWJjo',
     //
     //           // jsonp 값을 전달할 때 사용되는 파라미터 변수명
     //
     //           // 이 속성을 생략하면 callback 파라미터 변수명으로 전달된다.
     //
     //           jsonp: 'stone',
     //
     //           success:function(json) {
     //
     //                $('.main_content a').html(json.data.name);
     //
     //           }
     //
     //      });
     //
     // });


  $( function() {
    $( "#tabs" ).tabs({
      event: "mouseover"
    });
  } );

function get_list(name){
  document.write(name);
}

function SetTitle() {
  document.write('<div id="title">Astronomy World</div>');
}

var banner = ['Main','Sun','Moon','About Universe','Theory of relativity','Awesome stories'];
var sun = ['태양','태양의 구성','태양의 수명','태양계','햇빛의 나이는?']
var universe = ['우주에서 가장 큰 별','금성의 하루는 일년?','가장 큰 다이아몬드?','우주 엘레베이터']
var moon = ['달','달의 탄생','달은 인공물질?']
var theory = ['상대성이론이란?','시공간의 왜곡','쌍둥이 역설','빛보다 빠른 우주선?']

function sun_list(i){
document.write(sun[i]);
}

function moon_list(i){
document.write(moon[i]);
}

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
