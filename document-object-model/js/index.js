	
	// One
		function changeFontSize() {
			var size = document.getElementsByClassName("box");
			size[0].style.fontSize = "20px";
			size[1].style.fontSize = "20px";
			size[2].style.fontSize = "20px";

		}

	//Two 
	function increaseFontSize() {
		var sizeS = document.getElementById("p1");
		if (sizeS.style.fontSize < "30px") {
			sizeS.style.fontSize = (parseFloat(sizeS.style.fontSize)+1)+'px';
		}
	}

	//Three 
	function decreaseFontSize() {
		var sizeS = document.getElementById("p2");
		if (sizeS.style.fontSize > "10px") {
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
	function changeBgColor() {
		var backG = document.getElementsByTagName("body");
		backG[0].style.backgroundColor = "black";
	}
	//Six
	function copyContent() {
		document.getElementById("p1").innerText = document.getElementById("p2").innerText
	}