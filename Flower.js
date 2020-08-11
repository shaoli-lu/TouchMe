
var element = document.createElement("img");

element.src = "Flower.jpg";
document.body.appendChild(element);

element.style.transition = "opacity 10s";

element.style.opacity =0;
	
function act() {
	let en = document.getElementById('ename')
	setInterval(function(){en.style.color = "blue";}, 3000)
	let cn = document.getElementById('cname')
	setInterval(function(){cn.style.color = "red";}, 5000)
	setInterval(function(){cn.style.fontweight = "500";}, 7000)
	let tn = document.getElementById('tname')
	let sn = document.getElementById('sname')
	setInterval(function(){sn.style.color = "blue";}, 9000)
	setInterval(function(){tn.style.color = "red";}, 12000)
	
	
}