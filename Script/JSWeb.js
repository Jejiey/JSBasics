expandinfo();
firstItem();
secondItem();

function expandinfo() {
	const expand = document.getElementsByClassName("expand");
	const display = document.getElementById("center");
	displayChild = [].slice.call(display.getElementsByTagName("*"), 0);

	//initially hide all but first
	for (let j = 0; j < displayChild.length; j++) {
		displayChild[j].hidden = true;
	}
	displayChild[0].hidden = false;
	//adding functionality to all hidden buttons
	for (let i = 0; i < expand.length; i++) {
		expand[i].addEventListener("click", function onClick(event) {
			//cycling through display to hide
			for (let j = 0; j < displayChild.length; j++) {
				displayChild[j].hidden = true;
			}
			displayChild[i].hidden = false;
			if (i == 1) document.getElementById("TheCanvas").hidden = false;
		});
	}
}

function firstItem() {
	spinCount = 0;
	spinHell();
	const spin = [{ transform: "rotate(0)" }, { transform: "rotate(360deg)" }];
	const spinTime = {
		duration: 10000,
		iterations: 10000,
	};
	helloItem.animate(spin, spinTime);
}
function spinHell() {
	helloItem = document.getElementById("hWorld");
	helloItem.style.color = "hsl(" + spinCount + ",100%,70%)";
	spinCount++;
	if (helloItem.hidden == false) setTimeout(spinHell, 1);
}

function secondItem() {
	canvas = document.getElementById("TheCanvas");
	ctx = canvas.getContext("2d");

	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = "red";
	let num = 10;
	scaleX = canvas.width / (num - 1);
	scaleY = canvas.height / (num - 1);
	for (x = 0; x < num; x++) {
		for (y = 0; y < num; y++) {
			ctx.fillStyle =
				"hsl(" +
				Math.abs((num - 2) / 2 - x) * Math.abs((num - 2) / 2 - y) * 50 +
				",100%,50%)";
			ctx.fillRect(
				x * scaleX + 1,
				y * scaleY + 1,
				canvas.width / num,
				canvas.height / num
			);
		}
	}
}
