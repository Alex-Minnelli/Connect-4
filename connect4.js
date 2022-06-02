flag = 1;
let count1 = 0, count2 = 0, count3 = 0, count4 = 0, count5 = 0, count6 = 0, count7 = 0;
const column1 = ["b1-1", "b1-2", "b1-3", "b1-4", "b1-5", "b1-6"];
const column2 = ["b2-1", "b2-2", "b2-3", "b2-4", "b2-5", "b2-6"];
const column3 = ["b3-1", "b3-2", "b3-3", "b3-4", "b3-5", "b3-6"];
const column4 = ["b4-1", "b4-2", "b4-3", "b4-4", "b4-5", "b4-6"];
const column5 = ["b5-1", "b5-2", "b5-3", "b5-4", "b5-5", "b5-6"];
const column6 = ["b6-1", "b6-2", "b6-3", "b6-4", "b6-5", "b6-6"];
const column7 = ["b7-1", "b7-2", "b7-3", "b7-4", "b7-5", "b7-6"];

function win() {
	var b11 = document.getElementById("b1-1").value, b12 = document.getElementById("b1-2").value, b13 = document.getElementById("b1-3").value, b14 = document.getElementById("b1-4").value, b15 = document.getElementById("b1-5").value, b16 = document.getElementById("b1-6").value;
	var b21 = document.getElementById("b2-1").value, b22 = document.getElementById("b2-2").value, b23 = document.getElementById("b2-3").value, b24 = document.getElementById("b2-4").value, b25 = document.getElementById("b2-5").value, b26 = document.getElementById("b2-6").value;
	var b31 = document.getElementById("b3-1").value, b32 = document.getElementById("b3-2").value, b33 = document.getElementById("b3-3").value, b34 = document.getElementById("b3-4").value, b35 = document.getElementById("b3-5").value, b36 = document.getElementById("b3-6").value;
	var b41 = document.getElementById("b4-1").value, b42 = document.getElementById("b4-2").value, b43 = document.getElementById("b4-3").value, b44 = document.getElementById("b4-4").value, b45 = document.getElementById("b4-5").value, b46 = document.getElementById("b4-6").value;
	var b51 = document.getElementById("b5-1").value, b52 = document.getElementById("b5-2").value, b53 = document.getElementById("b5-3").value, b54 = document.getElementById("b5-4").value, b55 = document.getElementById("b5-5").value, b56 = document.getElementById("b5-6").value;
	var b61 = document.getElementById("b6-1").value, b62 = document.getElementById("b6-2").value, b63 = document.getElementById("b6-3").value, b64 = document.getElementById("b6-4").value, b65 = document.getElementById("b6-5").value, b66 = document.getElementById("b6-6").value;
	var b71 = document.getElementById("b7-1").value, b72 = document.getElementById("b7-2").value, b73 = document.getElementById("b7-3").value, b74 = document.getElementById("b7-4").value, b75 = document.getElementById("b7-5").value, b76 = document.getElementById("b7-6").value;

	let array = [[b16, b26, b36, b46, b56, b66, b76],
							 [b15, b25, b35, b45, b55, b65, b75],
							 [b14, b24, b34, b44, b54, b64, b74],
							 [b13, b23, b33, b43, b53, b63, b73],
							 [b12, b22, b32, b42, b52, b62, b72],
							 [b11, b21, b31, b41, b51, b61, b71]];

	if (count1+count2+count3+count4+count5+count6+count7 == 42){
		document.getElementById('print').innerHTML = "Tie Game";
		disable();
	}

	//searches diagonal left
	for (var col = 0; col < array.length-3; col++){
		for (var row = 0; row < array[0].length-3; row++){
			if (array[col][row] == 'X' && array[col+1][row+1] == 'X' && array[col+2][row+2] == 'X' && array[col+3][row+3] == 'X'){
				document.getElementById('print').innerHTML = "The Red Player Won";
				disable();
			} else if (array[col][row] == 'O' && array[col+1][row+1] == 'O' && array[col+2][row+2] == 'O' && array[col+3][row+3] == 'O'){
				document.getElementById('print').innerHTML = "The Yellow Player Won";
				disable();
			}
		}
	}

	//searches diagonal right
	for (var col = 0; col < array.length; col++){
		for (var row = 0; row < array[0].length; row++){
			if (array[col][row] == 'X' && array[col+1][row-1] == 'X' && array[col+2][row-2] == 'X' && array[col+3][row-3] == 'X'){
				document.getElementById('print').innerHTML = "The Red Player Won";
				disable();
			} else if (array[col][row] == 'O' && array[col+1][row+1] == 'O' && array[col+2][row+2] == 'O' && array[col+3][row+3] == 'O'){
				document.getElementById('print').innerHTML = "The Yellow Player Won";
				disable();
			}
		}
	}

	//Searches rows
	for (var col = 0; col < array.length; col++){
		for (var row = 0; row < array[0].length-4; row++){
			if (array[col][row] == 'X' && array[col][row+1] == 'X' && array[col][row+2] == 'X' && array[col][row+3] == 'X'){
				document.getElementById('print').innerHTML = "The Red Player Won";
				disable();
			} else if (array[col][row] == 'O' && array[col][row+1] == 'O' && array[col][row+2] == 'O' && array[col][row+3] == 'O'){
				document.getElementById('print').innerHTML = "The Yellow Player Won";
				disable();
			}
		}
	}

	//searches columns
	for (var row = 0; row < array[0].length; row++){
		for (var col = 0; col < array.length-3; col++){
			if (array[col][row] == 'X' && array[col+1][row] == 'X' && array[col+2][row] == 'X' && array[col+3][row] == 'X'){
				document.getElementById('print').innerHTML = "The Red Player Won";
				disable();
			} else if (array[col][row] == 'O' && array[col+1][row] == 'O' && array[col+2][row] == 'O' && array[col+3][row] == 'O'){
				document.getElementById('print').innerHTML = "The Yellow Player Won";
				disable();
			}
		}
	}

	let array2 = [b11, b21, b31, b41, b12, b22, b32, b42, b13, b23, b33, b43]
	let array3 = [[b13, b23, b33, b43],[b12, b22, b32, b42],[b11, b21, b31, b41]]



}

function reset() {
	location.reload();
	for (var i = 0; i < column1.length; i++) {
		document.getElementById(column1[i]).value = ' ';
		document.getElementById(column2[i]).value = ' ';
		document.getElementById(column3[i]).value = ' ';
		document.getElementById(column4[i]).value = ' ';
		document.getElementById(column5[i]).value = ' ';
		document.getElementById(column6[i]).value = ' ';
		document.getElementById(column7[i]).value = ' ';
	}

}

function disable() {
	for (var i = 0; i < column1.length; i++) {
		document.getElementById(column1[i]).disabled = true;
		document.getElementById(column2[i]).disabled = true;
		document.getElementById(column3[i]).disabled = true;
		document.getElementById(column4[i]).disabled = true;
		document.getElementById(column5[i]).disabled = true;
		document.getElementById(column6[i]).disabled = true;
		document.getElementById(column7[i]).disabled = true;
	}
}

function play(s) {

	if (flag == 1){
		switch (s){
			case 1:
				document.getElementById(column1[count1]).value = "X";
				document.getElementById(column1[count1]).style.color = "red";
				document.getElementById(column1[count1]).style.backgroundColor = "red";
				document.getElementById(column1[count1]).disabled = true;
				count1++;
				break;
			case 2:
				document.getElementById(column2[count2]).value = "X";
				document.getElementById(column2[count2]).style.color = "red";
				document.getElementById(column2[count2]).style.backgroundColor = "red";
				document.getElementById(column2[count2]).disabled = true;
				count2++;
				break;
			case 3:
				document.getElementById(column3[count3]).value = "X";
				document.getElementById(column3[count3]).style.color = "red";
				document.getElementById(column3[count3]).style.backgroundColor = "red";
				document.getElementById(column3[count3]).disabled = true;
				count3++;
				break;
			case 4:
				document.getElementById(column4[count4]).value = "X";
				document.getElementById(column4[count4]).style.color = "red";
				document.getElementById(column4[count4]).style.backgroundColor = "red";
				document.getElementById(column4[count4]).disabled = true;
				count4++;
				break;
			case 5:
				document.getElementById(column5[count5]).value = "X";
				document.getElementById(column5[count5]).style.color = "red";
				document.getElementById(column5[count5]).style.backgroundColor = "red";
				document.getElementById(column5[count5]).disabled = true;
				count5++;
				break;
			case 6:
				document.getElementById(column6[count6]).value = "X";
				document.getElementById(column6[count6]).style.color = "red";
				document.getElementById(column6[count6]).style.backgroundColor = "red";
				document.getElementById(column6[count6]).disabled = true;
				count6++;
				break;
			case 7:
				document.getElementById(column7[count7]).value = "X";
				document.getElementById(column7[count7]).style.color = "red";
				document.getElementById(column7[count7]).style.backgroundColor = "red";
				document.getElementById(column7[count7]).disabled = true;
				count7++;
				break;
		}
		flag = 0;
	}
	else {
		switch (s){
			case 1:
				document.getElementById(column1[count1]).value = "O";
				document.getElementById(column1[count1]).style.color = "yellow";
				document.getElementById(column1[count1]).style.backgroundColor = "yellow";
				document.getElementById(column1[count1]).disabled = true;
				count1++;
				break;
			case 2:
				document.getElementById(column2[count2]).value = "O";
				document.getElementById(column2[count2]).style.color = "yellow";
				document.getElementById(column2[count2]).style.backgroundColor = "yellow";
				document.getElementById(column2[count2]).disabled = true;
				count2++;
				break;
			case 3:
				document.getElementById(column3[count3]).value = "O";
				document.getElementById(column3[count3]).style.color = "yellow";
				document.getElementById(column3[count3]).style.backgroundColor = "yellow";
				document.getElementById(column3[count3]).disabled = true;
				count3++;
				break;
			case 4:
				document.getElementById(column4[count4]).value = "O";
				document.getElementById(column4[count4]).style.color = "yellow";
				document.getElementById(column4[count4]).style.backgroundColor = "yellow";
				document.getElementById(column4[count4]).disabled = true;
				count4++;
				break;
			case 5:
				document.getElementById(column5[count5]).value = "O";
				document.getElementById(column5[count5]).style.color = "yellow";
				document.getElementById(column5[count5]).style.backgroundColor = "yellow";
				document.getElementById(column5[count5]).disabled = true;
				count5++;
				break;
			case 6:
				document.getElementById(column6[count6]).value = "O";
				document.getElementById(column6[count6]).style.color = "yellow";
				document.getElementById(column6[count6]).style.backgroundColor = "yellow";
				document.getElementById(column6[count6]).disabled = true;
				count6++;
				break;
			case 7:
				document.getElementById(column7[count7]).value = "O";
				document.getElementById(column7[count7]).style.color = "yellow";
				document.getElementById(column7[count7]).style.backgroundColor = "yellow";
				document.getElementById(column7[count7]).disabled = true;
				count7++;
				break;
		}
		flag = 1;
	}
}
