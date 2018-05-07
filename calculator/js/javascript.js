
var x = '';
function a(num){
	return document.getElementById(num);
}
function xuLy(num) {
	x += num;
	a('result').value = x;
}
function del() {
	a('result').value = '';
	x = a('result').value;
}
function dell() {
	a('result').value = result.value.slice(0,result.value.length-1);
	x = a('result').value;
}
function res(){
	a('result').value = eval(a('result').value);
	x = a('result').value;
}
function square() {
	a('result').value = a('result').value * a('result').value;
}
function factorial() {
	var n = 1;
	for (var i = 1; i <= a('result').value; i++) {
		n *= i;
	}
	a('result').value = n;
}
function root() {
	a('result').value = Math.sqrt(a('result').value);
}