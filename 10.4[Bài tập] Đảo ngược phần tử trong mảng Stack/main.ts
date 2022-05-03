import {Stack} from "./Stack";

let data = "this is the testing sentence"
let stackData = new Stack(data)
stackData.push(", all done")
let reversingString = reversingData()
console.log(reversingString)


function reversingData():string {
    let reverseData = []
    let loopingTimes = stackData.data.length;
    for (let i = 0; i < loopingTimes; i++) {
        reverseData.push(stackData.pop())
    }
    return reverseData.join('')
}

