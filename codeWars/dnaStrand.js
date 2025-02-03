// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

//------- Solution 1 ------------ //

function dnaStrand(dna) {
  let output = "";
  for (let i = 0; i < dna.length; i++) {
    if (dna.charAt(i) === "A") {
      output += "T";
    } else if (dna.charAt(i) === "C") {
      output += "G";
    } else if (dna.charAt(i) === "T") {
      output += "A";
    } else if (dna.charAt(i) === "G") {
      output += "C";
    }
  }

  return output;
}

function dnaStrand2(dna) {
  const complements = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };

  return dna
  .split("")
  .map(char => complements[char])
  .join("");
}
console.log("func 01", dnaStrand("ATTGC"));
console.log("func 02", dnaStrand2("ATTGC"));

