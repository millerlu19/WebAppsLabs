import Score from '../js/score.js';

let expect = chai.expect;

describe('Score instances', () => {
   it('start w/ zeros', () => {
      let score = new Score();
      expect(score.switchWins).to.equal(0);
      expect(score.switchLosses).to.equal(0);
      expect(score.stayWins).to.equal(0);
      expect(score.stayLosses).to.equal(0);
   });
});