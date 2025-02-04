let journal = [];

function addEntry(events, squirrel){
  journal.push({events, squirrel});
}

addEntry("work", false);

console.log(journal);