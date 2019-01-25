export default class Game {
	constructor(maxPoints, points = 0) {
		this.maxPoints = maxPoints;
		this.points = points;
	}

	isOver() {
		if (points >= maxPoints) {
			return true;
		}
	}
}
