function populate () {
	if(container.isEnded()) {

	}
	else {
		var element = document.getElementById("question");
		element.innerHTML = container.getQuestionsIndex().text;
	}
}
var questions = {
	new Questions ("clgt2 32131", ["aaa2", "bbb2", "czzc2c", "d3dd"], "aaa2"),
	new Questions ("clgt3 das21", ["aaa3", "bbggb3", "ccd2c", "dd1d"], "aaa3"),
	new Questions ("clgt4 daz", ["aaa4", "bbsb4", "cc2c", "d1dd"], "aaa4"),
	new Questions ("clgt5", ["aaa5", "bba5b", "c3gcc", "dd3d"], "aaa5"),
	new Questions ("clgt6", ["aaa5", "bba5b", "c3gcc", "dd3d"], "aaa5"),
	
}
var quiz = new Quiz(questions);
populate();