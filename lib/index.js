define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ValidateURL = exports.ValidatePhone = exports.ValidateEmail = void 0;
    var ValidateEmail = function (email) {
        return (String(email)
            .toLowerCase()
            .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) !== null);
    };
    exports.ValidateEmail = ValidateEmail;
    var ValidatePhone = function (phone) {
        return phone !== '' && phone.length === 10 && phone.slice(0, 2) === '09';
    };
    exports.ValidatePhone = ValidatePhone;
    var ValidateURL = function (str) {
        var pattern = new RegExp('^(https?:\\/\\/)?' +
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
            '((\\d{1,3}\\.){3}\\d{1,3}))' +
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
            '(\\?[;&a-z\\d%_.~+=-]*)?' +
            '(\\#[-a-z\\d_]*)?$', 'i');
        return !!pattern.test(str);
    };
    exports.ValidateURL = ValidateURL;
    var Validate = {
        email: exports.ValidateEmail,
        phone: exports.ValidatePhone,
        url: exports.ValidateURL,
    };
    exports.default = Validate;
});
