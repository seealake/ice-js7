const students = [
  {
    standing: "freshman",
    id: 9000000000,
    /* could have lots of other properties like name, GPA, ... */
  },
  { standing: "freshman", id: 9000000001 },
  { standing: "sophomore", id: 9000000002 },
  { standing: "sophomore", id: 9000000003 },
  { standing: "sophomore", id: 9000000004 },
  { standing: "sophomore", id: 9000000005 },
  { standing: "sophomore", id: 9000000006 },
  { standing: "sophomore", id: 9000000007 },
  { standing: "sophomore", id: 9000000008 },
  { standing: "sophomore", id: 9000000009 },
  { standing: "sophomore", id: 9000000010 },
  { standing: "junior", id: 9000000011 },
  { standing: "junior", id: 9000000012 },
  { standing: "junior", id: 9000000013 },
  { standing: "junior", id: 9000000014 },
  { standing: "junior", id: 9000000015 },
  { standing: "junior", id: 9000000016 },
  { standing: "junior", id: 9000000017 },
  { standing: "junior", id: 9000000018 },
  { standing: "junior", id: 9000000019 },
  { standing: "senior", id: 9000000020 },
  { standing: "senior", id: 9000000021 },
  { standing: "senior", id: 9000000022 },
  { standing: "senior", id: 9000000023 },
  { standing: "senior", id: 9000000024 },
  { standing: "other", id: 9000000025 },
  { standing: "other", id: 9000000026 },
];

const counts = {
  freshman: 0,
  sophomore: 0,
  junior: 0,
  senior: 0,
  other: 0,
};

// your code here.

/* Output should be:
{ 
  freshman: 2,
  sophomore: 10,
  junior: 9,
  senior: 5,
  other: 2
}
*/

console.log(counts);
