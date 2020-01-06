// Arrays
// To define an array containing only one type, you would show it as: string[], number[], etc etc
// TS also infers a string type as shown by hovering over 'carMakers' below.
const carMakers = ["ford", "toyota", "chevy"]; // You should see carMakers: string[]

const dates = [new Date(), new Date()]; // You should see 'Date[]' as the type of the date const

const carsByMake: string[][] = [["f150"], ["corolla"], ["camaro"]]; // An array of string arrays can be shown as 'string[][]'

// Help with inference when extracting values. Both car0 and myCar carry a type from the parent carMakers array
const car0 = carMakers[0];
const myCar = carMakers.pop();

// This also prevents incompatible values
// carMakers.push(100); will not work

// Inference also helps with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// For flexible types, you can use multiple types in the definition.
const importantDates: (number | Date | string)[] = [
  new Date(),
  "2030-10-10",
  2019
]; // type is '(string | Date)'
// This is also inferred if you leave the array type undefined, which you can see by hovering over 'importantDates2'
const importantDates2 = [new Date(), "2030-10-10"];
