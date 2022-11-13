import diagnoses from '../../data/diagnoses';
import { Diagnosis } from '../type';

const getDiagnoses = (): Array<Diagnosis> => {
    return diagnoses;
};

export { getDiagnoses };
