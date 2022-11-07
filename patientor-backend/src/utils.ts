import { Gender, NewPatientEntry } from './type';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const toNewPatientEntry = (object: any): NewPatientEntry => {
    const newEntry = {
        name: parseString('name', object.name),
        dateOfBirth: parseDate('dateOfBirth', object.dateOfBirth),
        ssn: parseString('ssn', object.ssn),
        gender: parseGender(object.gender),
        occupation: parseString('occupation', object.occupation),
    };
    return newEntry;
};

const parseString = (field: string, text: unknown): string => {
    if (!text || typeof text !== 'string')
        throw new Error(`Incorrect or missing field: ${field}`);

    return text;
};

const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date));
};

const parseDate = (field: string, text: unknown): string => {
    if (!text || typeof text !== 'string' || !isDate(text))
        throw new Error(`Incorrect or missing field: ${field}`);

    return text;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isGender = (param: any): param is Gender => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return Object.values(Gender).includes(param);
};

const parseGender = (gender: unknown): Gender => {
    if (!gender || !isGender(gender))
        throw new Error(`Incorrect or missing gender`);

    return gender;
};

export default toNewPatientEntry;
