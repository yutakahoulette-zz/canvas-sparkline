'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var log = console.log.bind(console);

// [Number] -> CanvasRendering
module.exports = function (arr, canvas, options) {
  if (!canvas.getContext) return;
  canvas.width = 200;
  canvas.height = 100;

  // take diff of arr len and 200
  // divide 200 by diff

  var max = maxAll(arr);
  var min = minAll(arr);
  var len = arr.length;
  var segmentLen = 200 / len;
  var scaled = _ramda2['default'].map(function (n) {
    return 100 - n * 100 / max;
  }, arr);

  var ctx = canvas.getContext('2d');
  ctx.beginPath();
  _ramda2['default'].addIndex(_ramda2['default'].map)(function (n, i) {
    return ctx.lineTo(i * segmentLen, n);
  }, scaled);

  ctx.stroke();

  return canvas;
};

var maxAll = function maxAll(arr) {
  return _ramda2['default'].reduce(_ramda2['default'].max, _ramda2['default'].head(arr), _ramda2['default'].tail(arr));
};
var minAll = function minAll(arr) {
  return _ramda2['default'].reduce(_ramda2['default'].min, _ramda2['default'].head(arr), _ramda2['default'].tail(arr));
};

