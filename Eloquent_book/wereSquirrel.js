let journal = [];

function addEntry(events, squirrel){
  journal.push({events, squirrel});
}

addEntry(
  ["work",
    "touched tree",
    "pizza",
    "running",
    "television"
  ],
  false
);

console.log(journal);