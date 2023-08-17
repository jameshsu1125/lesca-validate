"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEnglish = isEnglish;
exports.isNumber = isNumber;
function isEnglish(s) {
  var i, charCode;
  var result = true;
  for (i = s.length; i--;) {
    charCode = s.charCodeAt(i);
    if (charCode < 65 || charCode > 122) result = false;
  }
  return result;
}
function isNumber(s) {
  var i, charCode;
  var result = true;
  for (i = s.length; i--;) {
    charCode = s.charCodeAt(i);
    if (charCode < 48 || charCode > 57) result = false;
  }
  return result;
}