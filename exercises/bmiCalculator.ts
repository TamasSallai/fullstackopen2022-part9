const calculateBmi = (height: number, weight: number): string => {
  const heightInMeter = height / 100
  const bmi = weight / (heightInMeter * heightInMeter)
  if (bmi < 18.5) {
    return 'Underweight'
  } else if (bmi < 24.9) {
    return 'Normal weight'
  } else if (bmi < 29.9) {
    return 'Overweight'
  } else if (bmi > 30) {
    return 'Obese'
  }
}
const height = Number(process.argv[2])
const weight = Number(process.argv[3])
console.log(calculateBmi(height, weight))
