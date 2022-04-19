///MAP
const tasks = [
  {
    name: "Study javascript",
    duration: 180,
  },
  {
    name: "Workout",
    duration: 60,
  },
  {
    name: "Play an instrument",
    duration: 45,
  },
];
let taskNames = tasks.map((task) => task.name);
console.log(taskNames);

//#############################################################################################
//Filter
const words = ["Python", "Javascript", "Go", "Java", "PHP", "Ruby"];
let results = words.filter(function (word, index, array) {
  return word.length > 8;
});
//ili
let results2 = words.filter((word) => word.length > 8);
console.log(results);
//#############################################################################################
//Reduce
let total = 0;
for (let i = 0; i < tasks.length; i++) {
  total = total + tasks[i].duration;
}
console.log(total);

let totalTime = tasks.reduce(function (total, task, index, array) {
  return total + task.duration;
}, 0);
console.log(totalTime);

let totalTime2 = tasks.reduce((total, task) => total + task.duration, 0);
console.log(totalTime2);
/*
  accumulator - the returned value of the previous iteration
  currentValue - the current item in the array
  index - the index of the current item
  array - the original array on which reduce was called
  The initialValue argument is optional. If provided, 
  it will be used as the initial accumulator value in the first call to the callback function.
  */
var pets = ["dog", "chicken", "car", "dog", "chicken", "chicken", "rabbit"];
var petCounts = pets.reduce(function (obj, pet) {
  if (!obj[pet]) {
    obj[pet] = 1;
  } else {
    obj[pet]++;
  }
  return obj;
}, {});
console.log(petCounts);
/*
  Output:
   { 
      dog: 2, 
      chicken: 3, 
      cat: 1, 
      rabbit: 1 
   }
   */
function join(arr, token) {
  const result = arr.reduce((acc, element) => {
    return (acc += element + token);
  }, "");
  return result.slice(0, -1);
}
let newWords = join(words, "+");
console.log(newWords);
