let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// filter, find
// return a new array

let filter = arr.filter((item, index) => {
  return item && item > 5;
});

console.log(filter);

let array = [
  { name: "Thai Bang", age: 38 },
  { name: "TB", age: 38 },
  { name: "Lina", age: 25 },
  { name: "Susu", age: 15 },
  { name: "Fun", age: 21 },
  { name: "JS", age: 33 },
];

let filter1 = array.filter((ten, tuoi) => {
  return ten && ten.age === 38;
});

console.log(filter1);
