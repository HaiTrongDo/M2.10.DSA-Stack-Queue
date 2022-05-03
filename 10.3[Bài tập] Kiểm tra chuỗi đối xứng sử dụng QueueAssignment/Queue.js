"use strict";
exports.__esModule = true;
exports.Queue = void 0;
var Queue = /** @class */ (function () {
    function Queue(data) {
        this.container = [];
        this.container = data.split("");
    }
    Queue.prototype.enqueue = function (item) {
        var _a;
        var input = item.split("");
        (_a = this.container).push.apply(_a, input);
    };
    Queue.prototype.dequeue = function () {
        return this.container.shift();
    };
    Queue.prototype.size = function () {
        return this.container.length;
    };
    return Queue;
}());
exports.Queue = Queue;
