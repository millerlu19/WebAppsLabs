// scorecarduiTest.js

import ScorecardUI from '../js/scorecardui.js';
let scorecard = new ScorecardUI($("#scorecard"));

scorecard.initialize({
	switchWins: 5, switchLoses: 3,
	stayWins: 2, stayLosses: 4
});

scorecard.update("switchLosses", 3 + 1);

scorecard.on("resetRequested", () => console.log("Reset called!"));

