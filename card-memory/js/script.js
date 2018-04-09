var click = 0;
var ctrl1;
var ctrl2;
var arrImages =[];
var double1;
var double2;
var score = 0;

$(document).ready(function(){
    loadGame();
    shuffle();
    loadGame();
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
    return arrImages;
    console.log(arrImages);
}
themes = function(){
    nextImages();
    var images ='';
    for(var i = 0; i < arrImages.length; i++){
        images += "<div class ='card'><img class='back' id = 'back' "+i+" onclick='clickImages(this,"+i+")'; src='img/up.jpg'><img class='front' id='front'"+i+" src='"+arrImages[i]+"'/></div>";
    }
    $('#one').html(images);
    // $('#diemtong').html("</br><span>Điểm "+ score +"</span");
}
clickImages = function(ctrl, i){
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
        $(ctrl1).css('transform', 'rotateY(180deg)');
         //quay ảnh off
         $('#front' + double2).css('transform', 'rotateY(0deg)');
         //quay ảnh on
         click = 0;
         if (ctrl1 != ctrl2)
            setTimeout(click, 0.1);
         else {
            click = 1;
            return;
        }   
    }
    console.log(ctrl);
}
