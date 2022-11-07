import express from 'express';
import { getNonSensitivePatiensEntries } from '../services/patients';

const router = express.Router();

router.get('/', (_req, res) => {
    res.send(getNonSensitivePatiensEntries());
});

export default router;
