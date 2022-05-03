"use strict";
exports.__esModule = true;
exports.Stack = void 0;
var Stack = /** @class */ (function () {
    function Stack(data) {
        this.container = [];
        this.container = data.split("");
    }
    Stack.prototype.push = function (data) {
        var _a;
        var input = data.split("");
        (_a = this.container).push.apply(_a, input);
    };
    Stack.prototype.pop = function () {
        return this.container.pop();
    };
    Stack.prototype.size = function () {
        return this.container.length;
    };
    return Stack;
}());
exports.Stack = Stack;
