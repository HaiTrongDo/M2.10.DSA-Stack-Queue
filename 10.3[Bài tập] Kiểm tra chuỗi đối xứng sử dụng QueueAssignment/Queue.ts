export class Queue {
    container: string[] = [];

    constructor(data: string) {
        this.container = data.split("")
    }

    enqueue(item:string): void {
        let input = item.split("")
        this.container.push(...input)
    }

    dequeue() {
        return this.container.shift()
    }

    size() {
        return this.container.length
    }

}