import patients from '../../data/patients';
import { v4 as uuidv4 } from 'uuid';
import {
    NewPatientEntry,
    NonSensitivePatientEntry,
    PatientEntry,
} from '../type';

const getNonSensitivePatiensEntries = (): Array<NonSensitivePatientEntry> => {
    return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation,
    }));
};

const addPatient = (newPatient: NewPatientEntry): PatientEntry => {
    const patient = {
        id: uuidv4(),
        ...newPatient,
    };
    patients.push(patient);
    return patient;
};

export { getNonSensitivePatiensEntries, addPatient };
