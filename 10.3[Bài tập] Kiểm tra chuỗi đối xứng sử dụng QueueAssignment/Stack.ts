export class Stack<T> {
    container: string[] = [];

    constructor(data:string) {
        this.container = data.split("")
    }

    push(data:string): void{
        let input = data.split("")
        this.container.push(...input)
    }

    pop():string{
        return this.container.pop()
    }

    size(): number {
        return this.container.length;
    }

}