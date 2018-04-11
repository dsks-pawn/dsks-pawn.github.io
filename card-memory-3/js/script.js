var click = 0;
var ctrl1;
var ctrl2;
var arrImages =[];
var double1;
var double2;
var score = 0;
var main = document.getElementById('audio-main');
var front =document.getElementById('audio-front');
var back = document.getElementById('audio-back');
var yes = document.getElementById('audio-yes');
var victory = document.getElementById('audio-victory');
var lost = document.getElementById('audio-lost');

$(document).ready(function(){
    shuffle();
    loadGame();
    playSound(main);
})
loadGame = function(){
    themes();
}
nextImages = function(){

  for(var i = 1; i <= 12; i++){
    arrImages.push('img/'+ i +".jpg",'img/'+ i +".jpg");
}
}
function shuffle() {
    for (var i = arrImages.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arrImages[i];
        arrImages[i] = arrImages[j];
        arrImages[j] = temp;
    }
}
themes = function(){
    nextImages();
    shuffle();
    var images ='';
    for(var i = 0; i < arrImages.length; i++){
        images += "<div class ='card'><img class='back' id = 'back"+i+"' "+ i +" onclick='clickImages(this,"+i+")'; src='img/up.jpg'>"
        +"<img class='front' id='front"+i+"' " + i + " src='"+arrImages[i]+"'/></div>";
    }
    $('#one').html(images);
    $('#result').html("</br><span>Điểm "+ score +"</span");
    $('#result').css('color', 'white');
}

clickImages = function(ctrl, i){
    playSound(front);
   // console.log(ctrl)
    if(click == 2) //Nếu đã click lần 2 rồi mà chưa chạy hàm kiểm tra xong thì ko cho chọn ảnh khác
        return;
    if(click == 0 ){

        //Gán vị trí lần chọn
        double1 = i;
        //Gán this từ hàm clickImages
        ctrl1 = ctrl;
        $(ctrl).addClass("js-back");
        $($(ctrl).next()).addClass("js-front");
        //quay ảnh on
        click = 1;
    }else {

     double2 = i;
        //Gán vị trí lần chọn
        ctrl2 = ctrl;
        //Gán this từ hàm clickImages
        $($(ctrl).next()).addClass("js-front");
        $(ctrl).addClass("js-back");
         //quay ảnh off
         //quay ảnh on
         click = 2;
         if (ctrl1 != ctrl2){
            setTimeout(checkImages, 1000);
        }
        else {
            click = 1;
            return;
        }
    }
}
//Hàm kiểm tra ảnh giống nhau
function checkImages() {
    //gán lại số lần click = 0
    click = 0;
    // kiểm tra ảnh giống nhau
    if(arrImages[double1] == arrImages[double2]){
        playSound(yes);
      $("#front"+ double1).css('display', 'none');
      $("#front"+ double2).css('display', 'none');
        //hiển thị điểm lên giao diện
        score++;
        $('#result').html("</br><span>Điểm "+ score +"</span");
    }
    else if (1 != 2) {
        $("#front" +double1).removeClass("js-front");
        $("#front" +double2).removeClass("js-front");
        $("#front" +double2).prev().removeClass("js-back");
        $("#front" +double1).prev().removeClass("js-back");
        playSound(back);
    }
    // Kiểm tra thắng
    if (score == arrImages.length/2){
        $('#vic').css('display', 'block');
        $('#loser').css('display', 'none');
        playSound(victory);
        pauseSound(main);
    }
}
function playSound(id){
        id.load(),
        id.play()
}
function pauseSound(id) {
        id.pause();
}


function progressBarSim(al) {
  var bar = document.getElementById('bar');
  var status = document.getElementById('status');
  status.innerHTML = al+" %";
  bar.value = al;
  al--;
    var sim = setTimeout("progressBarSim("+al+")",1000);
    if(al == 0){
      status.innerHTML = "0%";
      bar.value = 0;
      clearTimeout(sim);
      $('#img').css('display', 'block');
      $('#loser').css('display', 'none');
      pauseSound(main);
      playSound(lost);
    }
}
var amountLoaded = 100;
progressBarSim(amountLoaded);




