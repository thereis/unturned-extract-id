"use strict";

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

var _signale = require("signale");

var _signale2 = _interopRequireDefault(_signale);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var init = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var items, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item, itemName;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;

            _signale2.default.time("Application");

            _signale2.default.pending("Loading files...");
            _context.next = 5;
            return _fs2.default.readdirSync("Icons", { encoding: "utf8" }, function (err, files) {
              return files;
            });

          case 5:
            items = _context.sent;

            if (!(items.length > 0)) {
              _context.next = 10;
              break;
            }

            _signale2.default.success(items.length + " files loaded...");
            _context.next = 12;
            break;

          case 10:
            _signale2.default.error("There are no files inside the directory or probably you already did the task.");
            return _context.abrupt("return");

          case 12:

            _signale2.default.pending("Renaming and moving files to IconsOut...");

            // Check if folder exists
            if (!_fs2.default.existsSync("IconsOut")) {
              _fs2.default.mkdirSync("IconsOut");
              _signale2.default.success("IconsOut created successfully.");
            }

            // iterate over list
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 17;
            for (_iterator = items[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              item = _step.value;
              itemName = Math.max.apply(null, item.match(/\d+/g).map(Number));


              _fs2.default.renameSync("Icons/" + item, "IconsOut/" + itemName + ".png", function (err) {});
            }

            _context.next = 25;
            break;

          case 21:
            _context.prev = 21;
            _context.t0 = _context["catch"](17);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 25:
            _context.prev = 25;
            _context.prev = 26;

            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }

          case 28:
            _context.prev = 28;

            if (!_didIteratorError) {
              _context.next = 31;
              break;
            }

            throw _iteratorError;

          case 31:
            return _context.finish(28);

          case 32:
            return _context.finish(25);

          case 33:
            _signale2.default.timeEnd("Application");
            _signale2.default.success("The task have been completed!");
            _context.next = 40;
            break;

          case 37:
            _context.prev = 37;
            _context.t1 = _context["catch"](0);

            _signale2.default.fatal(_context.t1);

          case 40:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 37], [17, 21, 25, 33], [26,, 28, 32]]);
  }));

  return function init() {
    return _ref.apply(this, arguments);
  };
}();

_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
  return regeneratorRuntime.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return init();

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2, undefined);
}))();