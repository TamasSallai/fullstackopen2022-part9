import express from 'express';
import { getDiagnoses } from '../services/diagnoses';

const router = express.Router();

router.get('/', (_req, res) => {
    res.send(getDiagnoses());
});

export default router;
