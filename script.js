/* #1. Show Rating
Given a rating, display a star (*) for each whole number, and a full stop (.) for each half rating.

Example:
showRating(3); // returns '***'
showRating(4.5); // returns '****.'
showRating(0.5); // returns '.' 

*/

//? My attempt
function showRating(rating) {
  if (Number.isInteger(rating)) {
    return '*'.repeat(rating);
  } else {
    return '*'.repeat(rating) + '.';
  }
}

// console.log(showRating(3.5));

//? David's Solution
function showRatingSol(rating) {
  let ratings = '';
  for (let i = 0; i < Math.floor(rating); i++) {
    ratings += '*';
    if (i !== Math.floor(rating) - 1) {
      ratings += ' ';
    }
  }
  if (!Number.isInteger(rating)) {
    ratings += ' .';
  }
  return ratings;
}
// console.log(showRatingSol(3.5));

/* #2. Sort by lowest to highest price
Give an array of number, return the prices sorted by low to high.

Example:
sortLowToHigh([20,40,10,30,50,10]) => [10,10,20,30,40,50]

sortLowToHigh([5,10,0,-5]) => [-5,0,5,10]

sortLowToHigh([3,2,1,0]) => [0,1,2,3]


*/

//? My Attempt
function sortLowToHigh(prices) {
  return prices.sort((a, b) => a - b);
}

console.log(sortLowToHigh([20, 40, 10, 30, 50, 10]));
