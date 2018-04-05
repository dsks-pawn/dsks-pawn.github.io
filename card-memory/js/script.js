var click = 0;
var ctrl1;
var ctrl2;
var arrImages =[];
var double1;
var double2;
var score = 0;

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
        images += "<div class ='card'><img class='back' id = 'back' "+i+" onclick='clickImages(this,"+i+")'; src='img/up.jpg'><img class='front' id='front'"+i+" src='"+arrImages[i]+"'/></div>";
    }
    $('#one').html(images);
    $('#diemtong').html("</br><span>Điểm "+ score +"</span");
}
clickImages = function(ctrl, i){
    console.log($(ctrl));
    if(click == 2) //Nếu đã click lần 2 rồi mà chưa chạy hàm kiểm tra xong thì ko cho chọn ảnh khác
        return;
    if(click == 0 ){
        //Gán vị trí lần chọn
        double1 = i;
        //Gán this từ hàm clickImages
        ctrl1 = ctrl;
        //quay ảnh off
        // console.log($(ctrl + "img"));
        $(ctrl).addClass("js-back");
        $($(ctrl).next()).addClass("js-front");
        // $(ctrl1).css('transform', 'rotateY(180deg)');
        //quay ảnh on
        // $('#front' + double1).css('transform', 'rotateY(0deg)');
        click = 1;
    }else {
        double2 = i;
        //Gán vị trí lần chọn
        ctrl2 = ctrl;
        //Gán this từ hàm clickImages
        $($(ctrl).next()).addClass("js-front");
        $(ctrl).addClass("js-back");
        $(ctrl1).css('transform', 'rotateY(180deg)');
        // $(ctrl2).css('transform', 'rotateY(180deg)');
         //quay ảnh off
         $('#front' + double2).css('transform', 'rotateY(0deg)');
         //quay ảnh on
         click2 = 2;
         if (ctrl1 != ctrl2) 
            setTimeout(click, 600);
        else {
            click = 1;
            return;
        }

    }
    console.log(click)

}
