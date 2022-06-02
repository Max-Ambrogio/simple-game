"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var RockPaperScissors = /*#__PURE__*/function (_Game) {
  _inherits(RockPaperScissors, _Game);

  var _super = _createSuper(RockPaperScissors);

  function RockPaperScissors(selector) {
    var _this;

    _classCallCheck(this, RockPaperScissors);

    _this = _super.call(this, selector);

    _defineProperty(_assertThisInitialized(_this), "MOVES", ['rock', 'paper', "scissors"]);

    _defineProperty(_assertThisInitialized(_this), "OUTCOMES", {
      tie: 'tied',
      p1: 'Player 1 won',
      p2: 'Player 2 won'
    });

    _defineProperty(_assertThisInitialized(_this), "handleMove", function (evt) {
      var btn = evt.target;
      var move = btn.dataset.move;
      console.log("player1 guess:", move);
      var player1move = move;

      var player2move = _this.player2.randomGuess(_this.MOVES);

      var player1score = 0;
      var player2score = 0;
      _this.latestOutcome = _this.pickWinner(player1move, player2move);

      _this.updateGamestatus();

      _this.updateScore = _this.addPoints(player1score, player2score); // this.addPoints()
    });

    _defineProperty(_assertThisInitialized(_this), "pickWinner", function (p1m, p2m) {
      var player1Guess = _this.gameBoardEl.querySelector('.player-one');

      var player2Guess = _this.gameBoardEl.querySelector('.player-two');

      player1Guess.innerText = "player one chose: " + p1m;
      player2Guess.innerText = "player two chose: " + p2m;
      console.log('player guess:', p1m, p2m);
      var outcome = '';

      if (p1m == p2m) {
        //tie
        outcome = 'tie';
      } else {
        if (p1m == 'rock') {
          if (p2m == 'paper') {
            outcome = 'p2';
          } else {
            outcome = 'p1';
          }
        } else if (p1m == 'paper') {
          if (p2m == 'rock') {
            outcome = 'p1';
          } else {
            outcome = 'p2';
          }
        } else if (p1m == "scissors") {
          if (p2m == 'rock') {
            outcome = 'p2';
          } else {
            outcome = 'p1';
          }
        }
      }

      return outcome;
    });

    _defineProperty(_assertThisInitialized(_this), "addPoints", function () {
      //select player 1 score 
      //select player 2 score
      //check who won the round
      //if player 1 wins, add point for player 1 win update player 1 score 
      //if player 2 wins, add point for player 2 win update player 2 score 
      //tie = no points 
      //when the game reaches 5 points = game over 
      //game over = resets game
      var p1Score = _this.scoreBoardEl.querySelector('#player1 .score');

      console.log(p1Score);

      var p2Score = _this.scoreBoardEl.querySelector('#player2 .score');

      console.log(p2Score);
      var winner = _this.OUTCOMES[_this.latestOutcome];
      console.log(winner);

      if (winner == "tie") {//do nothing
      } else {
        if (winner == "Player 1 won") {
          p1Score.textContent++;
        } else if (winner == "Player 2 won") {
          p2Score.textContent++;
        }
      }

      return;
    });

    _defineProperty(_assertThisInitialized(_this), "updateGamestatus", function () {
      // const score = 
      var message = _this.OUTCOMES[_this.latestOutcome];
      var evt = new CustomEvent('game-status', {
        detail: {
          message: message
        }
      });
      document.dispatchEvent(evt);
    });

    _this.setup();

    return _this;
  }

  _createClass(RockPaperScissors, [{
    key: "setup",
    value: function setup() {
      var _this2 = this;

      var btns = this.gameBoardEl.querySelectorAll(".move button");
      btns.forEach(function (btn) {
        btn.addEventListener("click", _this2.handleMove);
      });
      this.player1 = new Player("me");
      this.player2 = new Player("computer");
      var resultsEl = this.gameBoardEl.querySelector('#round-result');
      new StatusMessage(resultsEl); // const scoreboardEl = this.scoreBoardEl.querySelector('scoreboard')
      // new StatusMessage(resultsEl)
    }
  }]);

  return RockPaperScissors;
}(Game);
//# sourceMappingURL=rock-paper-scissor.js.map
