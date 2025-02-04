// functions are first-class objects
// Functions in JavaScript possess all the capabilities of objects and are thus treated like
// any other object in the language.

var text = "Domo atigato!";
console.log("Before defining functions");

function useless(ninjaCallback) {
  console.log("In useless function");
  return ninjaCallback();
}

function getText() {
  console.log("In getText function");
  return text;
}

console.log("Before making all the calls");

console.assert(useless(getText)=== text,
  "The useless function works! " + text);

console.log("After the calls have been made")
