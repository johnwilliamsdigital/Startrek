window.setInterval(Update, 1);

var x=0;
var y=1;

function Update () {
	x++
	if (x>5) {
		x=1;	
		y++;
		
		if (y>5) {
			y=1;
			ClearGrid();
		}
	}
document.getElementById("grid-" + y + "-" + x).style.backgroundColor = RandomColor();
}


function ClearGrid () {
	for (var x = 1; x <= 5; x++) {
		for (var y = 1; y <= 5; y++) {
			document.getElementById("grid-" + x + "-" +
								   y).style.backgroundColor = RandomColor();
		}
	}
	
}

function RandomColor () {
	var red=Math.floor(Math.random()*256);
	var green=Math.floor(Math.random()*256);
	var blue=Math.floor(Math.random()*256);
	return "rgb("+red+","+green+","+blue+")";
}

