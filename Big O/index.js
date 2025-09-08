function logItems(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

logItems(10); // O(n)
// The time complexity of this function is O(n) because the time it takes to complete the function grows linearly with the input size n.
// The space complexity is O(1) because it uses a constant amount of space regardless of the input size.

// Drop Constants

function logItemsTwice(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  for (let j = 0; j < n; j++) {
    console.log(j);
  }
}
logItemsTwice(10); // O(n) not O(2n)
// The time complexity of this function is O(n) because the time it takes to complete the function grows linearly with the input size n.
// The space complexity is O(1) because it uses a constant amount of space regardless of the input size.

// Example of O(1)
function logFirstItem(n) {
  console.log(n[0]);
}
logFirstItem([1, 2, 3, 4, 5]); // O(1)

// The time complexity of this function is O(1) because it takes the same amount of time to complete regardless of the input size.
// The space complexity is O(1) because it uses a constant amount of space regardless of the input size.

// Example of O(n^2)
function logPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
logPairs(3); // O(n^2)
// The time complexity of this function is O(n^2) because there are two nested loops, each iterating n times.
// The space complexity is O(1) because it uses a constant amount of space regardless of the input size.

// Drop Non-Dominant Terms

function logItemsAndPairs(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  for (let j = 0; j < n; j++) {
    for (let k = 0; k < n; k++) {
      console.log(j, k);
    }
  }
}
logItemsAndPairs(3); // O(n^2) not O(n + n^2)
// The time complexity of this function is O(n^2) because the nested loops dominate the time complexity.
// The space complexity is O(1) because it uses a constant amount of space regardless of the input size.

// Example of O(n + m)
function logItemsFromTwoArrays(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
  }
  for (let j = 0; j < arr2.length; j++) {
    console.log(arr2[j]);
  }
}
logItemsFromTwoArrays([1, 2, 3], ['a', 'b', 'c']); // O(n + m)
// The time complexity of this function is O(n + m) because it iterates through two separate arrays of different sizes.
// The space complexity is O(1) because it uses a constant amount of space regardless of the input size.
// Example of O(n^3)
function logTriplets(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        console.log(i, j, k);
      }
    }
  }
}
logTriplets(2); // O(n^3)
// The time complexity of this function is O(n^3) because there are three nested loops, each iterating n times.
// The space complexity is O(1) because it uses a constant amount of space regardless of the input size.
// Example of O(log n)
