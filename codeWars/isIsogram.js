// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.


function isIsogram(str){
  let count ={}
  const lowerStr = str.toLowerCase();

  for(let i =0; i < lowerStr.length; i ++){
    let char = lowerStr[i];
    count[char] = (count[char] || 0) + 1;
  }
  let repeat = Object.values(count).some(count => count> 1);
  return !repeat;
}

console.log(isIsogram("jasinJ"))



