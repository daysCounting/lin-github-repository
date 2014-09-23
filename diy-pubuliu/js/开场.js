//jquery
$(function() {
	$(".frame").hide();
	var t = $("#hh");
	t.animate({
		width: "1920px"
<<<<<<< HEAD
	}, 1000);
=======
	}, 2000);
>>>>>>> origin/master
	t.animate({
		height: "950px",
		marginTop: "0px",
		marginBottom: "-300px",
		opacity: '0.2'
<<<<<<< HEAD
	}, 800, function() {
		t.fadeOut();
=======
	}, 500, function() {
		t.remove();
>>>>>>> origin/master
		$(".frame").show();
	})
});



// //javascript
// window.onload = function() {
// 	var t = document.getElementById("hh");
// 	currentStyle = window.getComputedStyle(t);
// 	var sl = currentStyle.width
// 	sl = parseInt(sl.substring(0, sl.length - 2))
// 	setTimeout(xixi(sl), 20);

// }

// function xixi(sl) {
// 	var t = document.getElementById("hh");
// 	sl += 10;
// 	t.style.width = sl + "px";
// 	if (sl < 1920) {
// 		setTimeout(function() {
// 			xixi(sl)
// }, 20);
// 	}
// }