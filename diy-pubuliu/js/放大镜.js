function haha(){
	var one = document.getElementsByClassName("numOne")[0];
	var two = document.getElementsByClassName("numTwo")[0];
	console.log(one.style.left);
	one.addEventListener('mouseover',function(){
		two.style.display="block"
	},false);
}
haha();