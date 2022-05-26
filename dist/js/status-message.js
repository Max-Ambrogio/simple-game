"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var StatusMessage = /*#__PURE__*/function () {
  function StatusMessage(element) {
    var _this = this;

    _classCallCheck(this, StatusMessage);

    _defineProperty(this, "handleStatusUpdate", function (evt) {
      _this.statusEl.textContent = evt.detail.message;
    });

    this.statusEl = element;
    this.setup();
  }

  _createClass(StatusMessage, [{
    key: "setup",
    value: function setup() {
      document.addEventListener('game-status', this.handleStatusUpdate);
    }
  }]);

  return StatusMessage;
}();
//# sourceMappingURL=status-message.js.map
