'use strict';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var LCDate = /*#__PURE__*/function () {
  function LCDate() {
    _classCallCheck(this, LCDate);

    console.log('new');
  }

  _createClass(LCDate, null, [{
    key: "init",
    value: function init() {
      console.log('init');
    }
  }]);

  return LCDate;
}();

var index = {
  LCDate: LCDate
};

module.exports = index;