const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;
console.log(isSum50)
const div5 = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) == 0;
console.log(div5);
const gReater = (n1 > n4) 
console.log(gReater)
const Chaingang = ((n2 - n1) * n3) / n4 == 20; 
// const Remainder = 
// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) == 2;
console.log(isTwoOdd)

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 <= 25 || n2 <= 25 || n3 <= 25 || n4 <= 25;
console.log(isOver25)
// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
console.log(isUnique)

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results
console.log(isValid);

const totalTripDistance = 1500; // miles
const fuelBudget = 175; // dollars
const fuelCostPerGallon = 3; // dollars per gallon

const speed55Mph = 55; // miles per hour
const speed60Mph = 60; // miles per hour
const speed75Mph = 75; // miles per hour

const efficiency55Mpg = 30; // miles per gallon
const efficiency60Mpg = 28; // miles per gallon
const efficiency75Mpg = 23; // miles per gallon

// Calculate gallons needed for the entire trip
const gallonsNeededAt55Mph = totalTripDistance / efficiency55Mpg;
const gallonsNeededAt60Mph = totalTripDistance / efficiency60Mpg;
const gallonsNeededAt75Mph = totalTripDistance / efficiency75Mpg;

// Check if the budget is enough to cover the fuel expense
const isBudgetEnoughAt55Mph = gallonsNeededAt55Mph * fuelCostPerGallon <= fuelBudget;
const isBudgetEnoughAt60Mph = gallonsNeededAt60Mph * fuelCostPerGallon <= fuelBudget;
const isBudgetEnoughAt75Mph = gallonsNeededAt75Mph * fuelCostPerGallon <= fuelBudget;

// Calculate the time the trip will take at each speed
const timeAt55Mph = totalTripDistance / speed55Mph;
const timeAt60Mph = totalTripDistance / speed60Mph;
const timeAt75Mph = totalTripDistance / speed75Mph;

// Display the results
console.log(`Gallons needed for the entire trip at 55 mph: ${gallonsNeededAt55Mph}`);
console.log(`Gallons needed for the entire trip at 60 mph: ${gallonsNeededAt60Mph}`);
console.log(`Gallons needed for the entire trip at 75 mph: ${gallonsNeededAt75Mph}`);

console.log(`Will the budget cover the fuel expense at 55 mph? ${isBudgetEnoughAt55Mph}`);
console.log(`Will the budget cover the fuel expense at 60 mph? ${isBudgetEnoughAt60Mph}`);
console.log(`Will the budget cover the fuel expense at 75 mph? ${isBudgetEnoughAt75Mph}`);

console.log(`Time for the trip at 55 mph: ${timeAt55Mph} hours`);
console.log(`Time for the trip at 60 mph: ${timeAt60Mph} hours`);
console.log(`Time for the trip at 75 mph: ${timeAt75Mph} hours`);
