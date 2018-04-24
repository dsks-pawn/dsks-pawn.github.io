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

	$('#name-finish').html('User name: '+ lastname + ' ' + name);
	$('#address-finish').html('Address: '+ address);
	$('#number-finish').html('Number: '+ number);
	$('#email-finish').html('Email: '+ email);
	$('#password-finish').html('Password: '+ password);
	$('#birth-finish').html('Birthday: '+ day + ' / ' + month + ' / ' + year);
	$('#sex-finish').html('Sex: '+ sex);

	$('#register-form').on('submit', function(){
		var checkValis = true;	
		if ($('#lastname').val().trim() == ''){
			$('#lastname').next('span').text('Lastname must start with lowercase, 6 to 20 characters (eg: smousena2030)');
			checkValis = false;
		}else {
			if ($('#lastname').val().match(/^\D\w{5,20}/)==null) {
				$('#lastname').next('span').text('Lastname must start with lowercase, 6 to 20 characters (eg: smousena2030)');
				checkValis = false;
			}else {
				$('#lastname').next('span').text('');
			}
		}
		if ($('#name').val().trim() == ''){
			$('#name').next('span').text('Name must start with lowercase, 6 to 20 characters (eg: breack213)');
			checkValis = false;
		}else {
			if ($('#name').val().match(/^\D\w{5,20}/)==null) {
				$('#name').next('span').text('Name must start with lowercase, 6 to 20 characters (eg: breack213)');
				checkValis = false;
			}else {
				$('#name').next('span').text('');
			}
		}
		if ($('#address').val().trim() == ''){
			$('#address').next('span').text('Address must start with lowercase, 6 to 30 characters (eg: California, USA)');
			checkValis = false;
		}else {
			if ($('#address').val().match(/^\D\w{5,30}/)==null) {
				$('#address').next('span').text('Address must start with lowercase, 6 to 30 characters (eg: California, USA)');
				checkValis = false;
			}else {
				$('#address').next('span').text('');
			}
		}
		if ($('#number').val().trim() == ''){
			$('#number').next('span').text('Mobile numbers must contain 10 or 11 numbers, starting with 0 (eg: 0988432234)');
			checkValis = false;
		}else {
			if ($('#number').val().match(/^0[0-9]\w{8,9}$/)== null) {
				$('#number').next('span').text('Mobile numbers must contain 10 or 11 numbers, starting with 0 (eg: 0988432234)');
				checkValis = false;
			}else {
				$('#number').next('span').text('');
			}
		}
		if ($('#email').val().trim() == ''){
			$('#email').next('span').text('Incorrect syntax! (eg:42318904@aol.com hoặc a@b.ccdd)')
			checkValis = false;
		}else {
			if ($('#email').val().match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)==null){
				$('#email').next('span').text('Incorrect syntax! (eg:42318904@aol.com hoặc a@b.ccdd)')
				checkValis = false;
			}else {
				$('#email').next('span').text('');
			}
		}
		if ($('#password').val().trim() == ''){
			$('#password').next('span').text('Password must contain 6 to 18 characters and contain at least 1 number (eg: smouse123)');
			checkValis = false;
		}else {
			if ($('#password').val().match(/^(?=.*\d).{6,16}$/)==null){
				$('#password').next('span').text('Password must contain 6 to 18 characters and contain at least 1 number (eg: smouse123)');
				checkValis = false;
			}else {
				$('#password').next('span').text('');
			}
		}
		return checkValis;
	})