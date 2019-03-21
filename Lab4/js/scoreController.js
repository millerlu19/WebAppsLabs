// scoreController.js

import Observable from './observable.js';

export default class ScorecardController extends Observable {

	constructor(score, ui) {
		this.score = score;
		this.ui = ui;
		this.ui.initialize(score);
		this.score.on('change', (property, value) => this.resetRequested());
	}

	modelChanged(property, value) {
		this.ui.update(property, value);
	}

}