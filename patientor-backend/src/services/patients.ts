import patients from '../../data/patients';
import { NonSensitivePatientEntry } from '../type';

const getNonSensitivePatiensEntries = (): Array<NonSensitivePatientEntry> => {
    return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation,
    }));
};

export { getNonSensitivePatiensEntries };
