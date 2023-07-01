"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var userObj = {
  username: "kyaw swar",
  email: "kyawswar@gmail.com",
  password: "kyaw@1243",
  gender: "male",
  phnumber: 84884452,
  address: "No(5),Hlaedan Road",
  profile: [{
    imagename: "kyawswar.jpg",
    imagepath: "www.image.com",
    imagesize: "120KB"
  }]
}; // console.log("user obj", userObj);

var data = _objectSpread({}, userObj); // console.log("data", data);
// const { username, email, password, gender, phnumber, address, profile } =
//   userObj;
// console.log("adderess", profile);
// const { username, profile, ...rest } = userObj;


var _userObj$profile = _slicedToArray(userObj.profile, 1),
    _userObj$profile$ = _userObj$profile[0],
    imagename = _userObj$profile$.imagename,
    imagepath = _userObj$profile$.imagepath,
    imagesize = _userObj$profile$.imagesize;

console.log("image name", imagename);
console.log("image path", imagepath); // console.log("image size", imagesize);
// console.log("username", username);
// profile.map((data) => {
//   //   console.log("data", data.imagename);
//   console.log("data", data.imagepath);
//   //   console.log("data", data.imagesize);
// });
//# sourceMappingURL=testingObject.dev.js.map
