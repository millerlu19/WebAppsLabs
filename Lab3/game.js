export default class Game {
	constructor(maxPoints) {
		this.maxPoints = maxPoints;
		this.points = 0;
	}

	isOver() {
		if (this.points >= this.maxPoints) {
			return true;
		}
		return false;
	}

	reset() {
		this.points = 0;
	}

	hit() {
		this.points += 1;
	}
}
