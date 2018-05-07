	
	// One
	var x;
		function changeFontSize(x) {
			var size = document.getElementsByClassName("box");
			size[0].style.fontSize = x + "px";
			size[1].style.fontSize = x + "px";
			size[2].style.fontSize = x + "px";
			return x;
		}
		
	//Two 
	function increaseFontSize(blue) {
			var sizeS = document.getElementById(blue);
		if (parseInt(sizeS.style.fontSize) < parseInt(30 + "px")) {
			sizeS.style.fontSize = (parseFloat(sizeS.style.fontSize)+1)+'px';
		}
	}

	//Three 
	function decreaseFontSize(green) {
		var sizeS = document.getElementById("green");
		if (parseInt(sizeS.style.fontSize) > parseInt(10 + "px")) {
			sizeS.style.fontSize = (parseFloat(sizeS.style.fontSize)-1)+'px';
		}
	}


	//Four
	function changeColor() {
		var change = document.getElementsByClassName("box");
		change[0].style.color = "blue";
		change[1].style.color = "yellow";	
		change[2].style.color = "red";
	}
	//Five 
	function changeBgColor(color) {
		var backG = document.getElementsByTagName("body");
		backG[0].style.backgroundColor = color;
	}
	//Six
	//Bài này là thay đổi p1 bằng p2 theo đề mà có phải biến đâu? anh
	function copyContent() {
		document.getElementById("p1").innerText = document.getElementById("p2").innerText
	}