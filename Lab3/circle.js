export default class Circle {
	constructor(color) {
		this.color = color;
		this.x = Math.random()*600;
		this.y = Math.random()*300;
		this.radius = (Math.random()*20)+10;
	}
}
