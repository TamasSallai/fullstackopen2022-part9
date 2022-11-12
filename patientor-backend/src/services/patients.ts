import patients from '../../data/patients';
import { v4 as uuidv4 } from 'uuid';
import { NewPatientEntry, PublicPatient, Patient } from '../type';

const getPublicPatients = (): Array<PublicPatient> => {
    return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation,
    }));
};

const getPatientById = (id: string): Patient | undefined => {
    return patients.find((patient) => patient.id === id);
};

const addPatient = (newPatient: NewPatientEntry): Patient => {
    const patient = {
        id: uuidv4(),
        ...newPatient,
    };
    patients.push(patient);
    return patient;
};

export { getPublicPatients, getPatientById, addPatient };
