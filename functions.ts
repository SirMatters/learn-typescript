//
// FUNCTIONS
//

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

/*
  Type inference for functions tries to figure out
  only the return value type
  
  But it still makes sense to add type annotation
  for function's return as it prevents return errors.
*/

const add = (a: number, b: number): number => {
  return a + b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

/**
 * Void & never
 * void is used to annotate that we expect undefined, null or no return of the function
 * never is used to show that we never reach the end of the function e.g execute the function completely
 */

const logger = (message: string): void => {
  console.log(message);
  return undefined;
};

const throwError = (message: string): never => {
  throw new Error(message);
};

/**
 * destructing with annotations
 */

const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

// ES 15
const logWeather2 = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date, weather);
};

logWeather(todaysWeather);
