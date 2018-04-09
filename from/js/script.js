// function loadRegister () {
// 	$('#content').css('display', 'none');
// }
// 

$(document).ready(function(){
	loadBirthday();
})
function loadBirthday(){
	for (var i = 1; i < 32; i++) {
		$('#day').append('<option value = "'+ i +'" >'+ i +'</option>');
	}
	for (var j = 1; j < 13; j++) {
		$('#month').append('<option value = "'+ j +'" >'+ j +'</option>');
	}
	for (var u =2018; u >=1960; u--) {
		$('#year').append('<option value = "'+ u +'" >'+ u +'</option>');
	}
}


$('#register-form').on('submit', function(){
	if ($('#lastname').val().trim()  == '') {
	     $('#lastname').next('span').text('Error lastname');

	}
})