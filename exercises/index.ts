import express from 'express'
const app = express()
import { calculateBmi } from './bmiCalculator'

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack')
})

app.get('/bmi', (req, res) => {
  try {
    const height = req.query.height
    const weight = req.query.weight

    if (isNaN(Number(height)) || isNaN(Number(weight))) {
      throw new Error('Provided values were not numbers!')
    }

    const bmi = calculateBmi(Number(height), Number(weight))
    res.send({
      weight,
      height,
      bmi,
    })
  } catch (error) {
    res.send({ error: 'malformatted parameters' })
  }
})

const PORT = 3003
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
