/* #1. Show Rating
Given a rating, display a star (*) for each whole number, and a full stop (.) for each half rating.

Example:
showRating(3); // returns '***'
showRating(4.5); // returns '****.'
showRating(0.5); // returns '.' 

*/

function showRating(rating) {
  if (Number.isInteger(rating)) {
    return '*'.repeat(rating);
  } else {
    return '*'.repeat(rating) + '.';
  }
}

console.log(showRating(3.5));
