function getUrlwindow(sParam) {
	var pageUrl =  $(location).attr('search').substring(1);
	var arrUrl = pageUrl.split("&");
	for (var i=0; i< arrUrl.length; i++) {
		var pair = arrUrl[i].split("=");
		if(pair[0] == sParam){
			return pair[1];}
		}
	}
	var username = decodeURIComponent(getUrlwindow('username'));
	var date = decodeURIComponent(getUrlwindow('date'));
	var time = decodeURIComponent(getUrlwindow('time'));
	var email = decodeURIComponent(getUrlwindow('email'));
	var phone_number = decodeURIComponent(getUrlwindow('phone_number'));
	var count_number = decodeURIComponent(getUrlwindow('count_number'));
	var message = decodeURIComponent(getUrlwindow('message'));

	$('.username').html('Tên của bạn: '+ username);
	$('.date').html('Ngày: '+ date);
	$('.time').html('Thời gian: '+ time);
	$('.email').html('Email: '+ email);
	$('.phone_number').html('Phone: '+ phone_number);
	$('.count_number').html('Số người:' + count_number);
	$('.message').html('Lời nhắn:' + message);