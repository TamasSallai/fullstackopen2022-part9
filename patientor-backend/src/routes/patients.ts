import express from 'express';
import {
    getPublicPatients,
    getPatientById,
    addPatient,
} from '../services/patients';
import toNewPatientEntry from '../utils';

const router = express.Router();

router.get('/', (_req, res) => {
    res.send(getPublicPatients());
});

router.get('/:id', (req, res) => {
    const patient = getPatientById(req.params.id);
    if (!patient) {
        return res.status(404).send({
            error: `Can't find patient with the id: ${req.params.id}`,
        });
    }
    return res.send(patient);
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
