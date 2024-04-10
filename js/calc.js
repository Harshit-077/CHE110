var keys = document.querySelectorAll('#calculator span');
var operators = ['+', '-', 'x', '÷'];
var decimalAdded = false;
var totalewaste = 0.0;
for(var i = 0; i < keys.length; i++) {
	keys[i].onclick = function(e) {
		var input = document.querySelector('.screen');
		var inputVal = input.innerHTML;
     	var btnVal = this.id;
		if(btnVal == 'C') {
			input.innerHTML = '';
			decimalAdded = false;
            totalewaste= 0;
		}
		else {
            totalewaste += parseFloat(btnVal);
            totalewaste = Math.round( totalewaste * 10) / 10;
			input.innerHTML = totalewaste*10;
		}
		e.preventDefault();
	} 
}