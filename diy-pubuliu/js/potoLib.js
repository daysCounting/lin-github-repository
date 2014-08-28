function showPic(whichpic) {
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src", source);
	var text = whichpic.getAttribute("title");
	var description = document.getElementById("description");
	description.firstChild.nodeValue = text;
}

var flag = 0;
var isIE = navigator.userAgent.indexOf("MSIE")>-1;
function down(btnH, btn) {
	btn.style.marginTop = btnH + "px";
	if (flag < 50) {
		flag += 1;
		btnH += 1;
		console.log(btnH);
		setTimeout(function() {
			down(btnH, btn)
		}, 20);
	} else {

		//setTimeout(up, 100);
	}
}

function up() {

}

function getInteger(Old){

}

window.onload = function() {
	var btn = document.getElementsByClassName("btn")[0];
	var btnH = btn.style.marginTop;
	console.log(btnH+btnH.className);
	btnH = parseInt(btnH.substring(0, btnH.length - 2));
	// var btnW = btn.width;
	var ipt = document.getElementsByTagName('inpuit')[0];
	btn.addEventListener('click', function() {
		console.log(btnH + "lslss");
		setTimeout(down(btnH, btn), 100);

	}, false);
  
}