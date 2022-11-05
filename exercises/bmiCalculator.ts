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

interface parsedBmiArgs {
  height: number
  weight: number
}

const parseBmiArguments = (args: Array<string>): parsedBmiArgs => {
  if (args.length < 4) throw new Error('Not enough arguments!')
  if (args.length > 4) throw new Error('Too many arguments!')

  if (isNaN(Number(args[2])) || isNaN(Number(args[3]))) {
    throw new Error('Provided values were not numbers!')
  }

  return {
    height: Number(args[2]),
    weight: Number(args[3]),
  }
}

try {
  const { height, weight } = parseBmiArguments(process.argv)
  const result = calculateBmi(height, weight)
  console.log(result)
} catch (error) {
  console.log(error.message)
}
