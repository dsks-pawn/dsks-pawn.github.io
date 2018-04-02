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
var quesTitle = document.getElementById('question');
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');
var round = document.getElementById('round');
var count = 1;
var result = 0;
var quiz = {};


quiz.start = function() {
	document.getElementById('content').style.display = "block";
	document.getElementById('start').style.display = "none";
	document.getElementById('count').style.display = "block";
	btn1.setAttribute("onclick", "quiz.saveQuest(this)");
	btn2.setAttribute("onclick", "quiz.saveQuest(this)");
	btn3.setAttribute("onclick", "quiz.saveQuest(this)");
	btn4.setAttribute("onclick", "quiz.saveQuest(this)");
	quiz.loadQuest(count-1);
}
quiz.loadQuest = function(count) {
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
	round.innerText = 'Câu số ' + (count +1) + " / " + questions.length;
}		
quiz.saveQuest = function(elm){
	if(count < questions.length){
		if(elm.innerText == elm.value) {	
			result++;
		}
		quiz.loadQuest(count);			
		console.log(result);
		count++;	

	}
	else{
		if(elm.innerText == elm.value) {	
			result++;
		}
		if (result == 5) {
			quesTitle.innerHTML = 'Thưởng nóng của sự thông minh';
			document.getElementsByTagName('img')[0].style.display = 'block';
			document.getElementById('container').style.display = "none";
			document.getElementById('quit').style.display = "block";
		}else if (result == 0) {
			quesTitle.innerHTML = 'Bạn không trả lời đúng câu nào';
			document.getElementById('btn6').style.display = "block";
		}else{
			quesTitle.innerHTML = 'Bạn trả lời đúng ' + result + ' câu hỏi';
			document.getElementById('btn6').style.display = "block";
			// for(var i = 0; i < result.length; i++){
			// 	quesTitle.innerHTML += "<br>Câu số " + [i+1] + ": " + result[i];	
		}
		document.getElementById('content').style.display = "none";
		document.getElementById('count').style.display = "none";
	}
}
