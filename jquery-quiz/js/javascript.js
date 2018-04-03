var question = {
	ques: "Xã đông nhất là xã nào?",
	answer1: "Không biết",
	answer2: "Xã đoàn",
	answer3: "Xã hội",
	answer4: "Phường xã",
	reply: "Xã hội"
}
var question1 = {
	ques: "Từ gì mà 100% người dân Việt Nam đều phát âm sai?",
	answer1: "Từ sai",
	answer2: "Từ nghiêng",
	answer3: "Từ chuẩn",
	answer4: "Từ đóng",
	reply: "Từ sai"
}
var question2 = {
	ques: "Nắng ba năm ta chưa hề bỏ bạn. Là cái gì?",
	answer1: "Áo mưa",
	answer2: "Cái nón",
	answer3: "Cái bóng",
	answer4: "Bình nước",
	reply: "Cái bóng"
}
var question3 = {
	ques: "Cái gì Adam có 2 mà Eva chỉ có 1?",
	answer1: "Quả táo",
	answer2: "Từ a",
	answer3: "Tình yêu",
	answer4: "Sự ngu dốt",
	reply: "Từ a"
}
var question4 = {
	ques: "Càng chơi càng ra nước?",
	answer1: "Đéo biết",
	answer2: "Đi bơi",
	answer3: "Tập tạ",
	answer4: "Chơi cờ",
	reply: "Chơi cờ"
}
var questions = [question, question1, question2, question3, question4];
var quesTitle = $('#question');
var btn1 = $('#btn1');
var btn2 = $('#btn2');
var btn3 = $('#btn3');
var btn4 = $('#btn4');
var btn5 = $('#btn5');
var round = $('#round');
var themen = $('#themen');
var count = 1;
var result = 0;
var quiz = {};
quesTitle.html(questions[count-1].ques);
btn1.html(questions[count-1].answer1);
btn2.html(questions[count-1].answer2);
btn3.html(questions[count-1].answer3);
btn4.html(questions[count-1].answer4);
btn1.val(questions[count-1].reply);
btn2.val(questions[count-1].reply);
btn3.val(questions[count-1].reply);
btn4.val(questions[count-1].reply);
round.html('Câu số: ' + (count+1-1)  + ' / ' + questions.length);

quiz.loadtQuest = function (elm) {
	if(count < questions.length){
		if(elm.innerHTML == elm.value) {
			result++;
		}
		quesTitle.html(questions[count].ques);
		btn1.html(questions[count].answer1);
		btn2.html(questions[count].answer2);
		btn3.html(questions[count].answer3);
		btn4.html(questions[count].answer4);
		btn1.val(questions[count].reply);
		btn2.val(questions[count].reply);
		btn3.val(questions[count].reply);
		btn4.val(questions[count].reply);
		round.html('Câu số: ' + (count+1)+  ' / ' + questions.length);
		count++;

	}else if(count == 5){	
		console.log(count);

		if(elm.innerHTML == elm.value) {
			result++;
		}	
		if (result == 0) {
			quesTitle.html('Bạn chơi rất là ngu');
			$('#content').css('display', 'none');
		}else if (result == 5) {
			$('#war').css('display', 'none');
			$('#winner').css('display', 'block');				
		}else {
			quesTitle.html('Bạn chơi được ' + result + ' điểm');
			$('#content').css('display', 'none');			
		}
		count++;	
	}

}

quiz.themens = function() {
	themen.attr('href', 'css/style2.css');
	btn5.attr('onclick', 'quiz.themens1()')
}
quiz.themens1 = function() {
	themen.attr('href', 'css/style3.css');
	btn5.attr('onclick', 'quiz.themens2()')
}
quiz.themens2 = function() {
	themen.attr('href', 'css/style4.css');
	btn5.attr('onclick', 'quiz.themens3()')
}
quiz.themens3 = function() {
	themen.attr('href', 'css/style5.css');
	btn5.attr('onclick', 'quiz.themens4()')
}
quiz.themens4 = function() {
	themen.attr('href', 'css/style6.css');
	btn5.attr('onclick', 'quiz.themens()')
}