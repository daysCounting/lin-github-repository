function $(id){
     return typeof id==='string'?document.getElementById(id):id ;
}
var timer=null;
window.onload=function(){
	var titles = document.getElementById("title");
	var lis =titles.getElementsByTagName("li");
	var content = document.getElementById("content");
	var ls = content.getElementsByTagName("li");
	 if (timer) {
	 	clearTimeout(timer);
	 	timer=null;
	 };
	for (var i = 0; i < lis.length; i++) {
		lis[i].id=i;
		lis[i].onmouseover=function(){
			console.log("this.id"+this.id);
			var This=this;
			timer=setTimeout(function(){
			for (var i = 0; i <lis.length; i++) {
			lis[i].className="";
			ls[i].style.display='none';
			};
			This.className='select';
			ls[This.id].style.display="block";
			},300)
		}
		
	};
}