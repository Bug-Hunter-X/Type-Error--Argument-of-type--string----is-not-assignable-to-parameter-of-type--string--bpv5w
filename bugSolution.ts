function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane Doe", "John Smith"];

// Iterate over the array and call the greeter function for each element
for (const name of user) {
  console.log(greeter(name));
}

//Alternative Solution: Using the spread operator
console.log(...user.map(name => greeter(name)));