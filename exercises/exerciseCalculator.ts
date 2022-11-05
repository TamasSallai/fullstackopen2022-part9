const calculateExercises = (days: Array<number>, target: number) => {
  const periodLength = days.length
  const trainingDays = days.filter((day) => day !== 0).length
  const average = days.reduce((a, b) => a + b) / days.length
  const success = average >= target

  let rating = 0
  if (average < target / 2) {
    rating = 1
  } else if (average < target) {
    rating = 2
  } else {
    rating = 3
  }

  let ratingDescription = ''
  switch (rating) {
    case 1:
      ratingDescription = 'You can do better than this.'
      break
    case 2:
      ratingDescription = 'Not too bad but could be better.'
      break
    case 3:
      ratingDescription = 'Great work, keep it up!'
      break
  }

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average,
  }
}

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2))
