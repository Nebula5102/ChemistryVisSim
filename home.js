var valAnimation = false;

function addCarbon() {
	var particleBox = document.getElementById("particleBox");
	var x = document.createElement("DIV");
	x.setAttribute('class','circle');
	particleBox.appendChild(x);
}


function setAnimation() {
	if (valAnimation == false) {
		valAnimation = true;
		var element = document.getElementById("animateButton")
		element.innerHTML = "Stop Animation";
		animate();
	} else {
		valAnimation = false;
		var element = document.getElementById("animateButton")
		element.innerHTML = "Animate";
	}
};


function animate() {
	var particles = document.getElementsByClassName("circle")
	var pos = 1;
	for (let i = 0; i < particles.length; i++) {
		particle = particles[i];
		position = particle.style.top;
		console.log(position);
		particle.style.top = pos + position + 'px';
		console.log(particle.style.top);
	}
	//	var pos = 0;
	//	id = setInterval(frame,10);
	//	function frame() {
	//		
	//	}
}
