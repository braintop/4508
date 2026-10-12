const fs = require('fs');

const file = "./data/visit.txt";
const line = "Hello asaf";
fs.appendFileSync(file, line);

console.log("File created");
let visits = 0;
visits = fs.readFileSync(file, 'utf8');
visits = parseInt(visits);
visits++;
fs.writeFileSync(file, visits.toString());
console.log(`Visits: ${visits}`);