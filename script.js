var colors = [
"rgb(250, 4, 20)",
"rgb(25, 20, 250)",
"rgb(20, 250, 0)",
"rgb(250, 250, 20)",
"rgb(250, 20, 250)",
"rgb(20, 250, 250)"
];
var modeSize = colors.length;
var correctAns = colors[Math.floor(Math.random()*modeSize)]; //return the String "rgb(blaH)"
document.querySelector("h1 span").innerHTML = correctAns;
var msg = document.querySelector("#msg");
var resetBtn = document.querySelector("#reset");
var box = document.querySelectorAll(".box");
var modeBtn = document.querySelectorAll(".mode");

generateColorBoxes();
function generateColorBoxes() {
	for(var i = 0;i<box.length;i++) {
		if(i===colors.indexOf(correctAns)) {
			box[i].style.backgroundColor = correctAns;
			continue;
		}
		var r = Math.floor(Math.random()*256);
		var g = Math.floor(Math.random()*256);
		var b = Math.floor(Math.random()*256);
		box[i].style.backgroundColor = "rgb("+r+", "+g+", "+b+")";
	}
}

for(var i = 0; i<box.length;i++) {
	box[i].addEventListener("click",function() {
		if(this.style.backgroundColor !== correctAns) {
			//display hard luck
			msg.innerHTML = "Oops, try again!";
			//vanish in thin air
			this.classList.add("makeTransparent");
		}
		else {
			//change span message
			msg.innerHTML = "Correct!";
			//change h1 background color to correctAns
			document.querySelector("h1").style.backgroundColor = correctAns;
			//change text from "NEW COLORS" to "PLAY AGAIN?"
			resetBtn.textContent = "play again?";
			//change all box colors to correctAns & reset opacity
			for(var j=0;j<box.length;j++) {
				box[j].classList.remove("makeTransparent");
				box[j].style.backgroundColor = correctAns;
			}
		}
	});
}

function reloadPage() {
	document.location.reload();
}

resetBtn.addEventListener("click", function() {
	reloadPage();
});

for(var i = 0;i<modeBtn.length;i++) {
	modeBtn[i].addEventListener("click",function() {
		//reset page
		modeSize = 3;
		//remove selected from all
		for(var j = 0;j<modeBtn.length;j++) {
			modeBtn[j].classList.remove("selected");
		}
		//add selected to the currently selected option
		this.classList.add("selected");
		//bring down mode to easy

	});
}