"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GET = void 0;

var _prompt = _interopRequireDefault(require("@models/prompt"));

var _database = require("@utils/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var GET = function GET(request) {
  var prompts;
  return regeneratorRuntime.async(function GET$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap((0, _database.connectToDB)());

        case 3:
          _context.next = 5;
          return regeneratorRuntime.awrap(_prompt["default"].find({}).populate("creator"));

        case 5:
          prompts = _context.sent;
          return _context.abrupt("return", new Response(JSON.stringify(prompts), {
            status: 200
          }));

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", new Response("Failed to fetch all prompts", {
            status: 500
          }));

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 9]]);
};

exports.GET = GET;
//# sourceMappingURL=route.dev.js.map
