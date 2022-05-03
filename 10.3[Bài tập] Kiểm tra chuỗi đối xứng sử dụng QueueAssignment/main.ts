import {Stack} from "./Stack";
import {Queue} from "./Queue";


function checkingReflectionString():void {
    let checkingFlag = true;
    if (stack.size() !== queue.size()) {
        console.log("chuỗi không đối xứng");
        return ;
    }
    let count = 0
    while (count < stack.container.length) {
        let currentStack = stack.pop()
        let currentQueue = queue.dequeue()
        if (currentStack !== currentQueue) {
            checkingFlag = false
            break;
        }
        count++
    }

    if (checkingFlag) {
        console.log("chuỗi đối xứng")
    } else {
        console.log("chuỗi không đối xứng")
    }
}



let dataForStack = "able was I ere I saw elba"
let dataForQueue = "able was I ere I saw elba"
let stack = new Stack(dataForStack)
let queue = new Queue(dataForQueue)
checkingReflectionString()
