"use strict";
exports.__esModule = true;
exports.QueueData = void 0;
var QueueData = /** @class */ (function () {
    function QueueData() {
        this.data = [];
    }
    QueueData.prototype.addPatientAtFirst = function (patient) {
        this.data.unshift(patient);
    };
    QueueData.prototype.addPatientAtLast = function (patient) {
        this.data.push(patient);
    };
    QueueData.prototype.addPatientAtIndex = function (patient, index) {
        this.data.splice(index, 0, patient);
    };
    QueueData.prototype.addPatient = function (patient) {
        var length = this.data.length;
        if (length == 0) {
            this.addPatientAtFirst(patient);
            return;
        }
        if (patient.code > this.data[0].code) {
            this.addPatientAtFirst(patient);
            return;
        }
        for (var i = 0; i < length; i++) {
            if (patient.code === this.data[i].code) {
                this.addPatientAtIndex(patient, i);
                return;
            }
        }
        if (patient.code < this.data[length - 1].code) {
            this.addPatientAtLast(patient);
        }
    };
    QueueData.prototype.showPatientList = function () {
        console.log(this.data);
    };
    QueueData.prototype.dequeue = function () {
        return this.data.pop();
    };
    QueueData.prototype.checkOutForPatient = function () {
        console.log(this.dequeue());
    };
    return QueueData;
}());
exports.QueueData = QueueData;
