import Score from '../js/score.js';

let expect = chai.expect;

describe('Score instances', () => {
   let score;
   beforeEach (() => { score = new Score(); });
   it('start w/ zeros', () => {
      checkValuesAre(0)
   });

   function checkValuesAre(switchWins) {
   	expect(score.switchWins).to.equal(switchWins);
    expect(score.switchLosses).to.equal(0);
    expect(score.stayWins).to.equal(0);
    expect(score.stayLosses).to.equal(0);
   }
});