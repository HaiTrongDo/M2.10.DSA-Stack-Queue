import {Patient} from "./Patient";
import {QueueData} from "./QueueData";

let PatientList = new QueueData();

let Smith = new Patient("Smith", 5)
let Jones = new Patient("Jones", 4)
let Fehrenbach = new Patient("Fehrenbach", 6)
let Brown = new Patient("Brown", 1)
let Ingram = new Patient("Ingram", 1)

PatientList.addPatient(Smith)
PatientList.addPatient(Jones)
PatientList.addPatient(Fehrenbach)
PatientList.addPatient(Brown)
PatientList.addPatient(Ingram)
PatientList.showPatientList()

PatientList.checkOutForPatient()
PatientList.showPatientList()
