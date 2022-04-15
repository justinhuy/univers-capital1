


/*
	
	function includeHTML() {
	var z, i, elmnt, file, xhttp;
	z = document.getElementsByTagName("*");
	for (i = 0; i < z.length; i++) {
	elmnt = z[i];
	file = elmnt.getAttribute("w3-include-html");
	if (file) {
	xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	if (this.readyState == 4) {
	if (this.status == 200) {elmnt.innerHTML = this.responseText;}
	if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
	elmnt.removeAttribute("w3-include-html");
	includeHTML();
	}
	}      
	xhttp.open("GET", file, true);
	xhttp.send();
	return;
	}
	}
	};
	
	includeHTML();
	
*/








window.addEventListener("resize", onResizeFunction);

window.addEventListener("load", onLoadFunction);

function onLoadFunction(e){
	onResizeFunction();
	window.addEventListener("resize", onResizeFunction);
}


function onResizeFunction (e){	
	var _width = window.innerWidth;	
	if (_width >= 992) {
		
	} 
	else {
		
	}
}









window.onbeforeunload = function() {
	window.scrollTo(0, 0);
}




gsap.registerPlugin(ScrollTrigger);
let speed = 100;


let scene1 = gsap.timeline();

ScrollTrigger.create({
	animation: scene1,
	trigger: ".scrollElement",
	start: "top top",
	end: "35% 100%",
	scrub: 3,
});




scene1.to("#about-us #planet-1", { y: -0.2 * speed, ease: "power1.in" }, 0);
scene1.to("#about-us #planet-2", { y: 0.2 * speed, x: 0.4 * speed, ease: "power1.in" }, 0);
scene1.to("#about-us #planet-3", { y: -0.5 * speed, ease: "power1.in" }, 0);
scene1.to("#about-us #planet-4", { y: -0.4 * speed, ease: "power1.in" }, 0);
scene1.to("#about-us #planet-5", { y: -0.4 * speed, x: 1 * speed, ease: "power1.in" }, 0);


let scene2 = gsap.timeline();
ScrollTrigger.create({
	animation: scene2,
	start: "top top",
	end: "100% 100%",
	scrub: 3,
});








var _width = window.innerWidth;	
if (_width >= 992) {	
	
	scene1.fromTo("#intro-logo", { y: 0, opacity: 1 }, { y: -20, opacity: 0 }, 0)
	
	scene1.to("#forest", { y: 1 * speed, x: -1.5 * speed, scale: 1.5, ease: "power1.in" }, 0);
	scene1.to("#terrain", { y: 3 * speed, ease: "power1.in" }, 0);	
	scene1.to("#mountain", { y: 3 * speed, ease: "power1.in" }, 0);		
	
	
	scene1.fromTo("#star-x", { y: 0, opacity: 1 }, { y: 50, opacity: 0 }, 0)
	scene1.fromTo("#star-red", { x: 0, opacity: 1 }, { x: 50, opacity: 0 }, 0)
	scene1.fromTo("#star-purple", { y: 0, opacity: 1 }, { x: -100, opacity: 0 }, 0)	
	
	scene2.to("#about-us-focus .left-elements .element-1", { y: 10 * speed, x: 4 * speed, rotate: 720, ease: "power1.in" }, 0);
scene2.to("#about-us-focus .left-elements .element-2", { y: 12 * speed, x: 4 * speed, rotate: 720, ease: "power1.in" }, 0);

scene2.to("#about-us-focus .right-elements .element-1", { y: 12 * speed, x: 3 * speed, rotate: 720, ease: "power1.in" }, 0);

scene2.to("#about-us-focus .right-elements .element-2", { y: 10 * speed, x: -4 * speed, rotate: 720, ease: "power1.in" }, 0);
} 












//scene2.fromTo("#about-us-focus", { y: 0, opacity: 0 }, { y: -200, opacity: 1 }, 0)

/*
	
	
	var element_1_val = 0;
	var element_1_acm = 0;
	var scroll_friction = 1 / 15;
	
	
	var element_1 = document.getElementsByClassName("element-1")[0];
	
	
	
	$(window).on('scroll', function(e) {
	var scrollPosition = $(this).scrollTop();	
	element_1_val = getVal(element_1, scrollPosition, 2);	
	
	});
	
	
	function getVal(el, scrollPos, ratio) {
	var scroll_lMouseX = scrollPos - $(el).offset().top;	
	var x = (20 * scroll_lMouseX) / 100*ratio;
	return (20 * scroll_lMouseX) / 100*ratio;
	
	}
	
	
	
	function animateDecor1() {
	element_1_acm += (element_1_val - element_1_acm) * scroll_friction;
	
	animateElement(element_1, element_1_acm, 3);
	animateElementIMG(element_1, element_1_acm, 1);
	
	
	window.requestAnimationFrame(animateDecor1);
	}
	
	animateDecor1();
	
	
	function animateElement (el, value, ratio) {	
	vx = value*ratio*0;
	vy = value*ratio*-.1;
	
	translate = 'translateX(' + vx + 'px) translateY(' + vy +'px)';
	
	$(el).css({
	'-webit-transform': translate,
	'-moz-transform': translate,
	'transform': translate
	});	
	
	}
	
	
	function animateElementIMG (el, value, ratio) {	
	
	var _img = el.children[0];
	rotate = 'rotate('+360*ratio*-.02+'deg)';
	$(_img).css({
	'-webit-transform': rotate,
	'-moz-transform': rotate,
	'transform': rotate
	});	
	console.log(360*ratio*-.02);
	
	}
	
	
	
*/

















/* Parallax Intro */

jQuery(document).ready(function($) {
	
	
	
});












jQuery(document).ready(function($) {
	
	
});










$(window).on('scroll', function(e) {
	/*
		
		var scrollPos = $(this).scrollTop();
		
		var _intro = document.getElementById("intro");	
		
		var layer_sky = _intro.getElementsByClassName("layer-sky")[0];
		
		var layer_stars_1 = _intro.getElementsByClassName("layer-stars-1")[0];
		var layer_stars_2 = _intro.getElementsByClassName("layer-stars-2")[0];
		var layer_star_4 = _intro.getElementsByClassName("layer-star-4")[0];
		var layer_logo = _intro.getElementsByClassName("layer-logo")[0];
		var layer_star_3 = _intro.getElementsByClassName("layer-star-3")[0];
		var layer_terrain = _intro.getElementsByClassName("layer-terrain")[0];
		var layer_star_2 = _intro.getElementsByClassName("layer-star-2")[0];
		var layer_star_1 = _intro.getElementsByClassName("layer-star-1")[0];
		
		var layer_forest = _intro.getElementsByClassName("layer-forest")[0];
		
		var introPos = _intro.offsetTop;	
		
		var _distance = scrollPos - introPos;
		
		var x = _distance*.0003; 
		
		animateZoom(layer_forest, 1+x);
		
		
		console.log(x);
	*/
});


/*
	var scroll_friction = 1 / 15;
	
	function zoomElement() {
	s4_phone_acm += (s4_phone_val - s4_phone_acm) * scroll_friction;
	
	animateElementY(s4_phone, s4_phone_acm, 3);
	animateElementY(s4_desktop, s4_phone_acm, -3);
	
	window.requestAnimationFrame(zoomElement);
	}
	
	zoomElement();
*/


function animateZoom (el, value) {	
	
	scale = 'scale(' + value + ', ' + value +')';
	
	$(el).css({
		'-webit-transform': scale,
		'-moz-transform': scale,
		'transform': scale
	});	
	
}














// modified version of random-normal
function normalPool(o){
	var r=0;
	do{
		var a=Math.round(normal({mean:o.mean,dev:o.dev}));
		if(a<o.pool.length&&a>=0) return o.pool[a];
		r++
	}
	while(r<100)
}
function randomNormal(o){
	if(o=Object.assign({mean:0,dev:1,pool:[]},o),Array.isArray(o.pool)&&o.pool.length>0)
	return normalPool(o);
	var r,a,n,e,l=o.mean,t=o.dev;
	do {
		r=(a=2*Math.random()-1)*a+(n=2*Math.random()-1)*n
	}
	while(r>=1);
	return e=a*Math.sqrt(-2*Math.log(r)/r),t*e+l
}

var NUM_PARTICLES ;
var PARTICLE_SIZE;

if (_width >= 992) {
	NUM_PARTICLES = 600;
	PARTICLE_SIZE = 0.1;
} 
else {
	NUM_PARTICLES = 100;
	PARTICLE_SIZE = 0.3;
}



const SPEED = 20000; // Milliseconds




let particles = [];

function rand(low, high) {
	return Math.random() * (high - low) + low;
}

function createParticle(canvas) {
	const colour = {
		r: 67,
		g: randomNormal({ mean: 125, dev: 20 }),
		b: 247,
		a: rand(0, 1),
	};
	return {
		x: -2,
		y: -2,
		diameter: Math.max(0, randomNormal({ mean: PARTICLE_SIZE, dev: PARTICLE_SIZE / 2 })),
		duration: randomNormal({ mean: SPEED, dev: SPEED * 0.1 }),
		amplitude: randomNormal({ mean: 16, dev: 2 }),
		offsetY: randomNormal({ mean: 0, dev: 10 }),
		arc: Math.PI * 2,
		startTime: performance.now() - rand(0, SPEED),
		colour: `rgba(${colour.r}, ${colour.g}, ${colour.b}, ${colour.a})`,
	}
}

function moveParticle(particle, canvas, time) {
	const progress = ((time - particle.startTime) % particle.duration) / particle.duration;
	return {
		...particle,
		x: progress,
		y: ((Math.sin(progress * particle.arc) * particle.amplitude) + particle.offsetY),
	};
}

function drawParticle(particle, canvas, ctx) {
	canvas = document.getElementById('particle-canvas');
	const vh = canvas.height / 100;
	
	ctx.fillStyle = particle.colour;
	ctx.beginPath();
	ctx.ellipse(
		particle.x * canvas.width,
		particle.y * vh + (canvas.height / 2),
		particle.diameter * vh,
		particle.diameter * vh,
		0,
		0,
		2 * Math.PI
	);
	ctx.fill();
}

function draw(time, canvas, ctx) {

	particles.forEach((particle, index) => {
		particles[index] = moveParticle(particle, canvas, time);
	})
	

	ctx.clearRect(0, 0, canvas.width, canvas.height);
	

	particles.forEach((particle) => {
		drawParticle(particle, canvas, ctx);
	})
	

	requestAnimationFrame((time) => draw(time, canvas, ctx));
}

function initializeCanvas() {
	let canvas = document.getElementById('particle-canvas');
	canvas.width = canvas.offsetWidth * window.devicePixelRatio;
	canvas.height = canvas.offsetHeight * window.devicePixelRatio;
	let ctx = canvas.getContext("2d");
	
	window.addEventListener('resize', () => {
		canvas.width = canvas.offsetWidth * window.devicePixelRatio;
		canvas.height = canvas.offsetHeight * window.devicePixelRatio;
		ctx = canvas.getContext("2d");
	})
	
	return [canvas, ctx];
}

function startAnimation() {
	const [canvas, ctx] = initializeCanvas();
	

	for (let i = 0; i < NUM_PARTICLES; i++) {
		particles.push(createParticle(canvas));
	}
	
	requestAnimationFrame((time) => draw(time, canvas, ctx));
};


(function () {
	if (document.readystate !== 'loading') {
		startAnimation();
		} else {
		document.addEventListener('DOMContentLoaded', () => {
			startAnimation();
		})
	}
}());






















