import {Patient} from "./Patient";

export class QueueData {
    data: Patient[]

    constructor() {
        this.data = []
    }

    addPatientAtFirst(patient: Patient):void {
        this.data.unshift(patient)
    }

    addPatientAtLast(patient):void {
        this.data.push(patient)
    }

    addPatientAtIndex(patient: Patient, index: number):void {
        this.data.splice(index, 0, patient)
    }


    addPatient(patient: Patient): any {
        let length = this.data.length
        if (length == 0) {
            this.addPatientAtFirst(patient)
            return;
        }

        if (patient.code > this.data[0].code) {
            this.addPatientAtFirst(patient)
            return;
        }

        for (let i = 0; i < length; i++) {
            if (patient.code === this.data[i].code) {
                this.addPatientAtIndex(patient, i)
                return;
            }
        }

        if (patient.code < this.data[length - 1].code) {
            this.addPatientAtLast(patient)
        }
    }

    showPatientList():void{
        console.log(this.data)
    }

    dequeue():Patient{
        return this.data.pop()
    }
    checkOutForPatient(){
        console.log(this.dequeue())
    }
}

