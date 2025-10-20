const studentCountByStanding = {
  freshman: 2,
  sophomore: 10,
  junior: 9,
  senior: 5,
  other: 2,
};

// your code here
let maxStanding = null;
let maxCount = 0;
for (const standing in studentCountByStanding) {
  const count = studentCountByStanding[standing];
  if (count > maxCount) {
    maxCount = count;
    maxStanding = standing;
  }
}

console.log(`${maxStanding}: ${maxCount}`);

// print which kind of student there are the most of, and how many there are.
