const fs = require('fs');
 
const file = "/data/visits.txt";
 
let visits = 0;
if (fs.existsSync(file)) {
  visits = parseInt(fs.readFileSync(file, 'utf8'));
}
 
visits++;
fs.writeFileSync(file, visits.toString());
 
console.log(`Visits: ${visits}`);
