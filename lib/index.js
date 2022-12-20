"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ValidateYoutubeURL = exports.ValidateURL = exports.ValidatePhone = exports.ValidateEmail = void 0;
var ValidateEmail = function ValidateEmail(email) {
  return String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) !== null;
};
exports.ValidateEmail = ValidateEmail;
var ValidatePhone = function ValidatePhone(phone) {
  return phone !== '' && phone.length === 10 && phone.slice(0, 2) === '09';
};
exports.ValidatePhone = ValidatePhone;
var ValidateURL = function ValidateURL(str) {
  var pattern = new RegExp('^(https?:\\/\\/)?' + '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + '((\\d{1,3}\\.){3}\\d{1,3}))' + '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + '(\\?[;&a-z\\d%_.~+=-]*)?' + '(\\#[-a-z\\d_]*)?$', 'i');
  return !!pattern.test(str);
};
exports.ValidateURL = ValidateURL;
var ValidateYoutubeURL = function ValidateYoutubeURL(url) {
  var pattern = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/|shorts\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
  var result = url.match(pattern);
  if (result) return result[1];
  return false;
};
exports.ValidateYoutubeURL = ValidateYoutubeURL;
var Validate = {
  email: ValidateEmail,
  phone: ValidatePhone,
  url: ValidateURL,
  youtubeID: ValidateYoutubeURL
};
var _default = Validate;
exports["default"] = _default;