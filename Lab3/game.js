export default class Game {
	constructor(maxPoints, points = 0) {
		this.maxPoints = maxPoints;
		this.points = points;
	}

	isOver() {
		if (this.points >= this.maxPoints) {
			return true;
		}
	}

	reset() {
		this.points = 0;
	}

	
}
