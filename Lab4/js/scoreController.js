// scoreController.js

export default class ScorecardController {

	constructor(score) {
   		this.score = score;
   		this.score.on('change', (property, value) => this.modelChanged(property, value));
	}
}