"use strict";
exports.__esModule = true;
exports.Stack = void 0;
var Stack = /** @class */ (function () {
    function Stack(data) {
        this.data = [];
        this.data = data.split("");
    }
    Stack.prototype.push = function (data) {
        var _a;
        var input = data.split("");
        (_a = this.data).push.apply(_a, input);
    };
    Stack.prototype.pop = function () {
        return this.data.pop();
    };
    return Stack;
}());
exports.Stack = Stack;
