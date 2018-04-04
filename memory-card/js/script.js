var click = 0;
var crl1;
var crl2;
var arrImages =[];
var double1;
var double2;
var diem = 0;

$(document).ready(function(){
    loadGame();
})
loadGame = function(){
    themes();
}
nextImages = function(){
  for(var i =1; i <= 12; i++){
    arrImages.push('img/'+ i +".jpg",'img/'+ i +".jpg");
  }
}
themes = function(){
    nextImages();
    var images ='';
    for(var i = 0; i < arrImages.length; i++){
        images += "<div class = 'card'><img class = 'back' id = 'back'"+i+"' onclick='clickImages(this, "+i+");' src='img/up.jpg'><img class='front' id 'front'"+i+" src='"+arrImages[i]+"'/></div>";
    }
    $('#one').html(images);
    $('#diemtong').html("</br><span>Điểm "+ diem +"</span");
}
clickImages = function(ctrl, i){
    if(click == 2)
        return;
    if(click==0){
        double1 = i;
        ctrl1 = ctrl;
        $(ctrl1).css('transform', 'rotateY(180deg)');
        $('#front' + vitri1).css('transform', 'rotateY(0deg)');
        click = 1;
    }else {
        vitri2 = i;
        ctrl2 = ctrl;
        $(ctrl2).css('transform', 'rotateY(180deg)');
        $('#front' + vitri2).css('transform', 'rotateY(0deg)');
        click2 = 2;
        if (ctrl1 != ctrl2) {
            setTimeuot(Kiemtra, 600);
        }else {
            click = 1;
            return;
        }
 
    }
}
