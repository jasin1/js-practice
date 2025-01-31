// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string) {
  //each letter has a unique number between 97 to 122
  // scan string and check if all these numbers appear, keep track of which ones I have found

  const alpha = new Set();

  for (const letter of string.toLowerCase()) {
    const code = letter.charCodeAt(0);

    if (code >= 97 && code <= 122) {
      alpha.add(letter);
    }
  }
  return alpha.size === 26;
}

const sentence = "The quick brown fox jumps over the ";

console.log(isPangram(sentence));
