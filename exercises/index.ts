import express from 'express';
const app = express();
import { calculateBmi } from './bmiCalculator';
import { calculateExercises } from './exerciseCalculator';

app.use(express.json());

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack');
});

app.get('/bmi', (req, res) => {
  try {
    const height = req.query.height;
    const weight = req.query.weight;

    if (isNaN(Number(height)) || isNaN(Number(weight))) {
      throw new Error('Provided values were not numbers!');
    }

    const bmi = calculateBmi(Number(height), Number(weight));
    res.send({
      weight,
      height,
      bmi,
    });
  } catch (error) {
    res.send({ error: 'malformatted parameters' });
  }
});

app.post('/exercises', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
  const target = req.body.target;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
  const daily_exercises = req.body.daily_exercises;

  if (!target || !daily_exercises) {
    return res.status(400).send({ error: 'parameters missing' });
  }

  try {
    if (isNaN(Number(target))) {
      throw new Error('malformatted parameters');
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment
    const exercises: Array<number> = daily_exercises.map((exercise: string) => {
      if (isNaN(Number(exercise))) {
        throw new Error('malformatted parameters');
      }
      return Number(exercise);
    });

    const result = calculateExercises(Number(target), exercises);
    return res.send(result);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).send({ error: error.message });
    }
    return res.status(400).send({ error: 'something went wrong' });
  }
});

const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
