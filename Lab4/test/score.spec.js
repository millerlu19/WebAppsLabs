import Score from '../js/score.js';

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

   function checkValuesAre(switchWins, switchLosses, stayWins, stayLosses) {
   	expect(score.switchWins).to.equal(switchWins);
    expect(score.switchLosses).to.equal(switchLosses);
    expect(score.stayWins).to.equal(stayWins);
    expect(score.stayLosses).to.equal(stayLosses);
   }
});