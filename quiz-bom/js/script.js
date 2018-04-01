var question0 = {
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

var questions = [question0, question1, question2, question3, question4];
var quesTitle = document.getElementById('question');
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');
var count = 0;
var kq = [];
var quiz = {};


quiz.start = function() {
	btn1.setAttribute("onclick", "quiz.saveQuest(this)");
	btn2.setAttribute("onclick", "quiz.saveQuest(this)");
	btn3.setAttribute("onclick", "quiz.saveQuest(this)");
	btn4.setAttribute("onclick", "quiz.saveQuest(this)");
	quiz.loadQuest();
}
quiz.loadQuest = function() {
	var move = questions[count];
	quesTitle.innerHTML = move.ques;
	btn1.innerHTML = move.answer1;
	btn2.innerHTML = move.answer2;
	btn3.innerHTML = move.answer3;
	btn4.innerHTML = move.answer4;
	btn1.value = move.reply;
	btn2.value = move.reply;
	btn3.value = move.reply;
	btn4.value = move.reply;
}		
quiz.saveQuest = function(elm) {
	if(count < questions.length){
		if(elm.innerHTML == elm.value) {
			kq.push(true);
		}else {	
			kq.push(false);
		}
		quiz.loadQuest();
		count++;
	}else{
		quesTitle.innerHTML = 'Điểm của bạn là : ' ;
		for(var i = 0; i < kq.length; i++){
			quesTitle.innerHTML += "Câu số " + i + " là " + kq[i] + "<br>";
		}
		document.getElementById('content').style.display = "none";
	}
}


