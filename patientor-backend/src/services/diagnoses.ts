import diagnoses from '../../data/diagnoses';
import { DiagnoseEntry } from '../type';

const getDiagnoses = (): Array<DiagnoseEntry> => {
    return diagnoses;
};

export { getDiagnoses };
