/**
 * Arrays
 */
const emtyArr: string[] = [];
const carMakers: string[] = ['ford', 'toyota', 'chevy'];

const carsByMake: string[][] = [];

// Why to use typed arrs?
// 1. help with inference when extracting values
const car = carMakers[0];
// 2. prevents to add incompatible items to array
// 3. help with array functions like map, reduce - TS add autocomplete on vars
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types (not needed if decl happens in the same line)
const importantDates: (Date | string)[] = [];
importantDates.push(new Date());
importantDates.push('2020-02-18');
importantDates.push(100); // err

/**
 * TUPLES
 * array-like structure where each element represents some property of a record
 */

// example drink: [drink_color, is_carbonated, sugar_contents]

const pepsi: [string, boolean, number] = ['brown', true, 40];
pepsi[0] = 'black';
pepsi[0] = false; // err!

// or use type annotation
type Drink = [string, boolean, number];
const sprite: Drink = ['clear', true, 40];
