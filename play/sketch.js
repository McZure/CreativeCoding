function setup() {
	new Canvas(800, 600);

	let face = loadImage('assets/face.png');
	let stretchy = new Sprite();
	
	stretchy.draw = () => {
		fill(237, 205, 0);

		push();
		rotate(stretchy.direction);
		ellipse(0, 0, 100 + stretchy.speed, 100 - stretchy.speed);
		pop();

		image(face, stretchy.vel.x * 2, stretchy.vel.y * 2);
	};

	stretchy.update = () => {
		stretchy.moveTowards(mouse, 0.07);
	};
}

function draw() {
	clear();
}