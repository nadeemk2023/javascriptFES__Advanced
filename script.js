//! #1. Show Rating
/* 
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

//! #2. Sort by lowest to highest price
/*  
Give an array of number, return the prices sorted by low to high.

Example:
sortLowToHigh([20,40,10,30,50,10]) => [10,10,20,30,40,50]

sortLowToHigh([5,10,0,-5]) => [-5,0,5,10]

sortLowToHigh([3,2,1,0]) => [0,1,2,3]


*/

//? My Attempt
function sortLowToHigh(numbers) {
  return numbers.sort((a, b) => a - b);
}

// console.log(sortLowToHigh([20, 40, 10, 30, 50, 10]));

//? David's Solution
function sortLowToHighSol(numbers) {
  return numbers.sort((a, b) => a - b);
}

// console.log(sortLowToHighSol([1, 5, 0, 10, 1000005, 2000, 2]));

//! #3. Sort by highest to lowest price
/*
Give an array of objects, return the prices sorted by high to low.

sortHighToLow([
{id: 1, price: 50},
{id: 2, price: 30},
{id: 3, price: 60},
{id: 4, price: 10},
])

=> 
  [
  {id: 3, price: 60},
  {id: 1: price: 50},
  {id:2, price: 30},
  {id: 4, price: 10}
  ]
*/

//? My Attempt
function sortHighToLow(arr) {
  return arr.sort((a, b) => b.price - a.price);
}

// console.log(
//   sortHighToLow([
//     {
//       id: 1,
//       price: 50,
//     },
//     {
//       id: 2,
//       price: 30,
//     },
//     {
//       id: 3,
//       price: 60,
//     },
//     {
//       id: 4,
//       price: 10,
//     },
//   ])
// );

//? David's Solution
function sortHighToLowSol(arr) {
  return arr.sort((a, b) => b.price - a.price);
}

//! #4. Promises
/*
On Youtube, watch:

'The Async Await Episode I Promised'
 - Fireship
 https://www.youtube.com/watch?v=vn3tm0quoqE

'Async Await JavaScript ES7'
 - Techsith (1.5x Speed)
 https://www.youtube.com/watch?v=IGoAdn-e5II

'Async JS Crash Course - Callbacks, Promises, Async Await'
  - Traversy Media
  https://www.youtube.com/watch?v=PoRJizFvM7s

  Additional Resources:
  https://www.youtube.com/watch?v=cCOL7MC4Pl0 - event loop talk by Jake Archibald

  https://www.youtube.com/watch?v=ueOG5uk7zo8 - Callbacks = Digital Fluency

  Each Video is around at least 30 minutes long.

  important notes:
  Async functions always return a promise.

  The event loop executes one task from the macro-task queue (such as script) and then one task from the micro-task queue (such as promise). But if the micro-task queue is not empty, the event loop will keep executing tasks from the micro-task queue until it is empty before moving to the macro-task queue or rendering.


  Promise.all() - takes an array of promises and resolves when all the promises have resolved, meaning it will wait for all the promises to resolve before returning a single promise.

  ADDITIONAL NOTES IN NOTION -> FES -> WEEK 3
  */

//! #5. Find all posts by a single user
/*
  Call this API: "https://jsonplaceholder.typicode.com/posts" and return all the posts by any given user ID.

  */

//? My Attempt with fetch
function postsByUserFetch(userId) {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => console.log(data.filter(post => post.userId === userId)));
}
// postsByUserFetch(4);

//? My Attempt with async/await
async function postsbyUserAsync(userId) {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data.filter(post => post.userId === userId));
}

// postsbyUserAsync(5);

//? David's Solution
async function postsByUserSol(userId) {
  const promise = await fetch('https://jsonplaceholder.typicode.com/posts');

  const result = await promise.json();
  const posts = result.filter(element => element.userId === userId);
  console.log(posts);
}

// postsByUserSol(4);
