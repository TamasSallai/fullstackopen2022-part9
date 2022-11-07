import express from 'express';
import {
    getNonSensitivePatiensEntries,
    addPatient,
} from '../services/patients';
import toNewPatientEntry from '../utils';

const router = express.Router();

router.get('/', (_req, res) => {
    res.send(getNonSensitivePatiensEntries());
});

router.post('/', (req, res) => {
    try {
        const newPatientEntry = toNewPatientEntry(req.body);
        const savedPatient = addPatient(newPatientEntry);
        res.send(savedPatient);
    } catch (error) {
        let errorMessage = 'Something went wrong';
        if (error instanceof Error) {
            errorMessage = error.message;
        }
        res.send({ error: errorMessage });
    }
});

export default router;
