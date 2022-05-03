export class Stack{
    data:string[] = []

    constructor(data: string) {
        this.data = data.split("");
    }

    push(data:string):void{
        let input = data.split("");
        this.data.push(...input);
    }

    pop():string{
        return this.data.pop()
    }

}