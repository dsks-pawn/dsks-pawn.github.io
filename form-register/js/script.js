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

function getUrlwindow(sParam) {
	var pageUrl =  $(location).attr('search').substring(1);
	var arrUrl = pageUrl.split("&");
	 for (var i=0; i< arrUrl.length; i++) {
               var pair = arrUrl[i].split("=");
               if(pair[0] == sParam){
               	return pair[1];}
       }

}
var lastname = decodeURIComponent(getUrlwindow('lastname'));
var name = decodeURIComponent(getUrlwindow('name'));
var address = decodeURIComponent(getUrlwindow('address'));
var number = decodeURIComponent(getUrlwindow('number'));
var email = decodeURIComponent(getUrlwindow('email'));
var password = decodeURIComponent(getUrlwindow('password'));
var day = decodeURIComponent(getUrlwindow('day'));
var month = decodeURIComponent(getUrlwindow('month'));
var year = decodeURIComponent(getUrlwindow('year'));
var sex = decodeURIComponent(getUrlwindow('sex'));

$('#name-finish').html('User name: '+ lastname);
$('#address-finish').html('Address: '+ address);
$('#number-finish').html('Number: '+ number);
$('#email-finish').html('Email: '+ email);
$('#password-finish').html('Password: '+ password);
$('#birth-finish').html('Birthday: '+ day + ' / ' + month + ' / ' + year);
$('#sex-finish').html('Sex: '+ sex);