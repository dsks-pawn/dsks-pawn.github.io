	
	// One
		function changeFontSize(x) {
			var size = document.getElementsByClassName("content");
			size[0].style.fontSize = x + "px";
		}
	//Two 
		function increaseFontSize() {
			var sizeS = document.getElementById("p1");
			console.log(sizeS.style);
		}

	//Three


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