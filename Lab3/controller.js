import Game from './game.js';
import Circle from './circle.js';

const POINTS_GOAL = 20;
const COLORS = ["purple", "blue", "red", "orange", "yellow"];
const XDIM = 600;
const YDIM = 300;
const RMIN = 10;
const RMAX = 30;
const MILLIS_FOR_NEW_CIRCLE = 2000;  // 2 seconds
const MILLIS_CIRCLE_ACTIVE  = 2500;  // 2.5 seconds
const SVGNS = "http://www.w3.org/2000/svg";

function checkGame() {
   let game = new Game(POINTS_GOAL);
   if (game.points !== 0) {
      error("Game objects need to be initialized with a 'points' property that equals 0");
   }
   if (typeof game.isOver !== 'function') {
      error("Game objects need to have a 'isOver()' method.");
   }
   if (game.isOver()) {
      error("Game should not be over until points has reached the max points.");
   }
   game.points = POINTS_GOAL + 1;
   if (!game.isOver()) {
      error("Game should be over when points reaches or exceeds the max points.");
   }
   if (typeof game.reset !== 'function') {
      error("Game objects need to have a 'reset()' method.");
   }
   game.reset();
   if (game.points !== 0) {
      error("Calling game reset should reset the points to 0.");
   }
   if (typeof game.hit !== 'function') {
      error("Game objects need to have a 'hit()' method.");
   }
   game.hit();
   if (game.points !== 1) {
      error("Calling game hit should increase the points by 1.");
   }
   game.hit();
   if (game.points !== 2) {
      error("Calling game hit should increase the points by 1.");
   }
   game.reset();
}

function checkCircle() {
   let aColor = randomColor();
   let circle = new Circle(aColor);
   if (circle.color !== aColor) {
      error("Circle objects need to be initialized with the provided 'color' property");
   }
   if (!(circle.x > 0 && circle.x < XDIM)) {
      error(`Circle objects need to be initialized with x equaling a random number from 0 to ${XDIM}`);
   }
   if (!(circle.y > 0 && circle.y < XDIM)) {
      error(`Circle objects need to be initialized with y equaling a random number from 0 to ${YDIM}`);
   }
   if (!(circle.radius > RMIN && circle.radius < RMAX)) {
      error(`Circle objects need to be initialized with radius equaling a random number from ${RMIN} to ${RMAX}`);
   }
}

export default class Controller {
   constructor() {
      this.msg = $("#msg");
      this.svgRoot = $("svg");
      this.svgRoot.attr("width", "1000");
      this.svgRoot.attr("height", "800");
      this.game = new Game(POINTS_GOAL);
      alert("Click the circles to earn points!");
      this.svgRoot.on("click", "circle", ev => {
         ev.target.remove();
         this.game.hit();
         this.updatePoints();
         this.checkWin();
      });
      this.updatePoints();
      this.setCircleTimer();
   }

   updatePoints() {
      this.msg.html(`${this.game.points} points`);
   }
   setCircleTimer() {
      this.timer = window.setInterval(() => this.addCircle(), MILLIS_FOR_NEW_CIRCLE);
   }
   checkWin() {
      if (this.game.isOver()) {
         alert("Congratulations, you have won!");
      }
   }
   addCircle() {
      const circleObj = new Circle(randomColor());
      const circleElem = document.createElementNS(SVGNS, 'circle');
      circleElem.setAttributeNS(null, 'cx', circleObj.x);
      circleElem.setAttributeNS(null, 'cy', circleObj.y);
      circleElem.setAttributeNS(null, 'r',  circleObj.radius);
      circleElem.setAttributeNS(null, 'style', `fill: ${circleObj.color}; stroke: black; stroke-width: 1px;` );
      setTimeout(() => {
         circleElem.remove();
      }, MILLIS_CIRCLE_ACTIVE);
      this.svgRoot.append(circleElem);
   }
}


function randomColor() {
   var i = Math.floor(Math.random() * COLORS.length);
   return COLORS[i];
}
function error(message) {
   $("#msg").html(message).addClass("error");
   console.log(message);
   throw new Error(message);
}

$(function() {
   checkGame();
   checkCircle();
   new Controller();
});
