import Score from '../js/score.js';
import spy;

let expect = chai.expect;

describe('Score instances', () => {
	let score;
	beforeEach (() => { score = new Score(); });
	it('start w/ zeros', () => {
    	checkValuesAre(0, 0, 0, 0);
	});
	it('score class increments appropriate value', () => {
   		score.addResult(Score.ACTION_SWITCH, Score.RESULT_WIN);
  		checkValuesAre(1, 0, 0, 0);
  		score.addResult(Score.ACTION_SWITCH, Score.RESULT_LOSS);
  		checkValuesAre(1, 1, 0, 0);
  		score.addResult(Score.ACTION_STAY, Score.RESULT_WIN);
  		checkValuesAre(1, 1, 1, 0);
  		score.addResult(Score.ACTION_STAY, Score.RESULT_LOSS);
  		checkValuesAre(1, 1, 1, 1);
	});
	it('set all counters to zeros', () => {
   		score.addResult(Score.ACTION_SWITCH, Score.RESULT_WIN);
  		checkValuesAre(1, 0, 0, 0);
  		score.addResult(Score.ACTION_SWITCH, Score.RESULT_LOSS);
  		checkValuesAre(1, 1, 0, 0);
  		score.addResult(Score.ACTION_STAY, Score.RESULT_WIN);
  		checkValuesAre(1, 1, 1, 0);
  		score.addResult(Score.ACTION_STAY, Score.RESULT_LOSS);
  		checkValuesAre(1, 1, 1, 1);
  		score.reset();
  		checkValuesAre(0, 0, 0, 0);
	});

	function checkValuesAre(switchWins, switchLosses, stayWins, stayLosses) {
   		expect(score.switchWins).to.equal(switchWins);
    	expect(score.switchLosses).to.equal(switchLosses);
    	expect(score.stayWins).to.equal(stayWins);
    	expect(score.stayLosses).to.equal(stayLosses);
	}

	
	it('trigger messages when values change', () => {
    	let spy = new Spy(score, "trigger");
   		score.addResult(Score.ACTION_SWITCH, Score.RESULT_WIN);
   		expect(spy.argumentsOfCall(0)).to.deep.equal(['change', 'switchWins', 1]);
	});
});
