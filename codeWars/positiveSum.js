// Task
// You get an array of numbers, return the sum of all of the positives ones.

// Example
// [1, -4, 7, 12] => 1 + 7 + 12 = 20

// Note
// If there is nothing to sum, the sum is default to 0.

function positiveSum1(arr){
  const holder = [0];
  arr.forEach(element => {
    if(element > 0){
      holder.push(element);
    } 
  });
  const Sum = holder.reduce((a,b)=> a+b);
  return Sum;
}


function positiveSum2(arr){
  return arr.reduce((sum, num)=>{
    if(num > 0){
      return num + sum;
    }else{
      return sum;
    }
  },0)
}

function positiveSum(arr){
  return arr.reduce((sum, num)=> num > 0 ? sum + num : sum, 0);
}

console.log("my original bloated solution", positiveSum1([1, -4, 7, 12]));
console.log("better solution, but still a bit bloated", positiveSum2([1, -4, 7, 12]));
console.log("Most elegant solution", positiveSum([1, -4, 7, 12]));


const letters = ['a', 'b', 'a', 'c', 'b', 'a'];

const letterCount = letters.reduce((acc, letter) => {
  acc[letter] = (acc[letter] || 0) + 1;
  return acc;
}, {}); // Initial value is an empty object

console.log(letterCount); 
// Output: { a: 3, b: 2, c: 1 }