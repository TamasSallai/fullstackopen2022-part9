interface exerciseResult {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

export const calculateExercises = (
  target: number,
  days: Array<number>
): exerciseResult => {
  const periodLength = days.length;
  const trainingDays = days.filter((day) => day !== 0).length;
  const average = days.reduce((a, b) => a + b) / days.length;
  const success = average >= target;

  let rating = 0;
  if (average < target / 2) {
    rating = 1;
  } else if (average < target) {
    rating = 2;
  } else {
    rating = 3;
  }

  let ratingDescription = '';
  switch (rating) {
    case 1:
      ratingDescription = 'You can do better than this.';
      break;
    case 2:
      ratingDescription = 'Not too bad but could be better.';
      break;
    case 3:
      ratingDescription = 'Great work, keep it up!';
      break;
  }

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average,
  };
};

interface parsedExerciseArgs {
  target: number;
  days: Array<number>;
}

const parseExerciseArguments = (args: Array<string>): parsedExerciseArgs => {
  if (args.length < 4) throw new Error('Not enough arguments!');

  const days: Array<number> = [];

  for (let i = 3; i < args.length; i++) {
    if (isNaN(Number(args[i]))) {
      throw new Error('Provided values were not numbers!');
    }
    days.push(Number(args[i]));
  }

  return {
    target: Number(args[2]),
    days: days,
  };
};

try {
  const { target, days } = parseExerciseArguments(process.argv);
  const result = calculateExercises(target, days);
  console.log(result);
} catch (error) {
  if (error instanceof Error) {
    console.log(`Error: ${error.message}`);
  }
}
