// score.js

import Observable from './observable.js';

export default class Score extends Observable {
	constructor() {
		super();
		this.reset();
	}

	addResult(action, result) {
		if (action == Score.ACTION_SWITCH) {
			if (result == Score.RESULT_WIN) {
				this.incr('switchWins');
			}
			else {
				this.incr('switchLosses');
			}
		}
		else {
			if (result == Score.RESULT_WIN) {
				this.incr('stayWins');
			}
			else {
				this.incr('stayLosses');
			}
		}
	}

	reset() {
		this.set('switchWins', 0);
		this.set('switchLosses', 0);
		this.set('stayWins', 0);
		this.set('stayLosses', 0);
	}

	set(property, value) {
		this[property] = value;
		this.trigger('change', property, value);
	}

	incr(property) {
   		this.set(property, this[property] + 1);
	}

}

Score.ACTION_STAY = "stay";
Score.ACTION_SWITCH = "switch";
Score.RESULT_WIN = "win";
Score.RESULT_LOSS = "loss";
