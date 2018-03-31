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
	ques: "Càng chơi càng ra nuớc?",
	answer1: "Đéo biết",
	answer2: "Đi bơi",
	answer3: "Tập tạ",
	answer4: "Chơi cờ",
	reply: "Chơi cờ"
}

var questionAll = [question, question1, question2, question3, question4];
var quesTitle = document.getElementById('question');
var ans1 = document.getElementById('btn1');
var ans2 = document.getElementById('btn2');
var ans3 = document.getElementById('btn3');
var ans4 = document.getElementById('btn4');
var count = 0;
var countQuest = 1;
var score = 0;
var quiz = {};


quiz.start = function() {
	//Xuất câu gói câu hỏiđầu tiên
	//Click chọn câu hỏi lưu đc câu trả lời
	//	//ấn vào next chuyển câu hỏi
	//lưu kết quả rồi xuất ra màn hình
	quiz.loadQuest();
	
}
quiz.loadQuest = function() {
	var move = questionAll[count];
	quesTitle.innerHTML = move.ques;
	ans1.innerHTML = move.answer1;
	ans2.innerHTML = move.answer2;
	ans3.innerHTML = move.answer3;
	ans4.innerHTML = move.answer4;
	count+=1;		
}		
quiz.saveQuest = function() {
		
}


