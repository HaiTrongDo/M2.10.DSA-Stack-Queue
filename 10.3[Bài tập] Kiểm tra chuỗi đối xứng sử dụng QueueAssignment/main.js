"use strict";
exports.__esModule = true;
var Stack_1 = require("./Stack");
var Queue_1 = require("./Queue");
function checkingReflectionString() {
    var checkingFlag = true;
    if (stack.size() !== queue.size()) {
        console.log("chuỗi không đối xứng");
        return;
    }
    var count = 0;
    while (count < stack.container.length) {
        var currentStack = stack.pop();
        var currentQueue = queue.dequeue();
        if (currentStack !== currentQueue) {
            checkingFlag = false;
            break;
        }
        count++;
    }
    if (checkingFlag) {
        console.log("chuỗi đối xứng");
    }
    else {
        console.log("chuỗi không đối xứng");
    }
}
var dataForStack = "able was I ere I saw elba";
var dataForQueue = "able was I ere I saw elba";
var stack = new Stack_1.Stack(dataForStack);
var queue = new Queue_1.Queue(dataForQueue);
checkingReflectionString();
