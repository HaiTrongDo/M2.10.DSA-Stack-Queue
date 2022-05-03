"use strict";
exports.__esModule = true;
var Stack_1 = require("./Stack");
var data = "this is the testing sentence";
var stackData = new Stack_1.Stack(data);
stackData.push(", all done");
var reversingString = reversingData();
console.log(reversingString);
function reversingData() {
    var reverseData = [];
    var loopingTimes = stackData.data.length;
    for (var i = 0; i < loopingTimes; i++) {
        reverseData.push(stackData.pop());
    }
    return reverseData.join('');
}
