function logItems(n) {
  for (let i = 0; i < n; i++) {
    console.log('O(n)', i);
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
        console.log('O(n^3)', j, k);
      }
    }
  }
}
logTriplets(2); // O(n^3)
// The time complexity of this function is O(n^3) because there are three nested loops, each iterating n times.
// The space complexity is O(1) because it uses a constant amount of space regardless of the input size.
// Example of O(log n)

//Example of O(log n)
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
console.log('binary search', binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7)); // O(log n)
// The time complexity of this function is O(log n) because the search space is halved with each iteration.
// The space complexity is O(1) because it uses a constant amount of space regardless of the input size.

// Example of O(n log n)
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}
console.log(mergeSort([38, 27, 43, 3, 9, 82, 10])); // O(n log n)
// The time complexity of this function is O(n log n) because the array is repeatedly divided in half (log n) and then merged back together (n).
// The space complexity is O(n) because it requires additional space to store the left and right subarrays during the merge process.
// Example of O(2^n)
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(5)); // O(2^n)
// The time complexity of this function is O(2^n) because each call to fibonacci results in two additional calls, leading to an exponential growth in the number of calls.
// The space complexity is O(n) because the maximum depth of the recursion tree is n.
// Example of O(n!)

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(5)); // O(n!)
// The time complexity of this function is O(n) because it makes n recursive calls to compute the factorial.
// The space complexity is O(n) because of the call stack used for recursion.
// Note: O(n!) time complexity is typically associated with algorithms that generate all permutations of a set, which is not demonstrated in this factorial example.
// Example of O(n!)
function generatePermutations(arr) {
  if (arr.length === 0) return [[]];

  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    const remaining = arr.slice(0, i).concat(arr.slice(i + 1));
    const remainingPerms = generatePermutations(remaining);
    for (const perm of remainingPerms) {
      result.push([current, ...perm]);
    }
  }
  return result;
}
console.log(generatePermutations([1, 2, 3])); // O(n!)
// The time complexity of this function is O(n!) because it generates all permutations of the input array, which grows factorially with the size of the array.,
// The space complexity is O(n) because of the call stack used for recursion and the space needed to store the permutations.
// Example of O(n!)

function travelingSalesman(cities) {
  const n = cities.length;
  const visited = Array(n).fill(false);
  let minPath = Infinity;

  function dfs(currentCity, count, cost) {
    if (count === n && cities[currentCity][0]) {
      minPath = Math.min(minPath, cost + cities[currentCity][0]);
      return;
    }

    for (let nextCity = 0; nextCity < n; nextCity++) {
      if (!visited[nextCity] && cities[currentCity][nextCity]) {
        visited[nextCity] = true;
        dfs(nextCity, count + 1, cost + cities[currentCity][nextCity]);
        visited[nextCity] = false;
      }
    }
  }

  visited[0] = true;
  dfs(0, 1, 0);
  return minPath;
}
const cities = [
  [0, 10, 15, 20],
  [10, 0, 35, 25],
  [15, 35, 0, 30],
  [20, 25, 30, 0],
];
console.log(travelingSalesman(cities)); // O(n!)
// The time complexity of this function is O(n!) because it explores all possible routes to visit each city exactly once and return to the starting point, which grows factorially with the number of cities.
// The space complexity is O(n) because of the call stack used for recursion and the space needed to track visited cities.
// Example of O(n!)
function hanoi(n, source, target, auxiliary) {
  if (n === 1) {
    console.log(`Move disk 1 from ${source} to ${target}`);
    return;
  }
  hanoi(n - 1, source, auxiliary, target);
  console.log(`Move disk ${n} from ${source} to ${target}`);
  hanoi(n - 1, auxiliary, target, source);
}
hanoi(3, 'A', 'C', 'B'); // O(2^n)
// The time complexity of this function is O(2^n) because the number of moves required to solve the Tower of Hanoi problem doubles with each additional disk.
// The space complexity is O(n) because of the call stack used for recursion.
// Example of O(n^2)
function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90])); // O(n^2)
// The time complexity of this function is O(n^2) because it uses two nested loops to compare and swap elements in the array.
// The space complexity is O(1) because it sorts the array in place without requiring additional storage.
// Example of O(n^2)
function selectionSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    if (minIdx !== i) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
  }
  return arr;
}
console.log(selectionSort([64, 25, 12, 22, 11])); // O(n^2)
// The time complexity of this function is O(n^2) because it uses two nested loops to find the minimum element and swap it with the first unsorted element.
// The space complexity is O(1) because it sorts the array in place without requiring additional storage.
// Example of O(n^2)
function insertionSort(arr) {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}
console.log(insertionSort([12, 11, 13, 5, 6])); // O(n^2)
// The time complexity of this function is O(n^2) because it uses a nested loop to compare and insert elements into their correct position.
// The space complexity is O(1) because it sorts the array in place without requiring additional storage.
// Example of O(n^2)

function shellSort(arr) {
  const n = arr.length;
  let gap = Math.floor(n / 2);

  while (gap > 0) {
    for (let i = gap; i < n; i++) {
      const temp = arr[i];
      let j = i;
      while (j >= gap && arr[j - gap] > temp) {
        arr[j] = arr[j - gap];
        j -= gap;
      }
      arr[j] = temp;
    }
    gap = Math.floor(gap / 2);
  }
  return arr;
}
console.log(shellSort([12, 34, 54, 2, 3])); // O(n^2) in worst case
// The time complexity of this function is O(n^2) in the worst case because it uses a gap sequence that can lead to quadratic behavior.
// The space complexity is O(1) because it sorts the array in place without requiring additional storage.
// Example of O(n^2)
function cocktailSort(arr) {
  let swapped = true;
  let start = 0;
  let end = arr.length - 1;

  while (swapped) {
    swapped = false;
    for (let i = start; i < end; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
    if (!swapped) break;
    swapped = false;
    end--;
    for (let i = end - 1; i >= start; i--) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
    start++;
  }
  return arr;
}
console.log(cocktailSort([5, 1, 4, 2, 8])); // O(n^2)
// The time complexity of this function is O(n^2) because it uses nested loops to sort the array in both directions.
// The space complexity is O(1) because it sorts the array in place without requiring additional storage.
// Example of O(n^2)
function gnomeSort(arr) {
  let index = 0;
  const n = arr.length;

  while (index < n) {
    if (index === 0 || arr[index] >= arr[index - 1]) {
      index++;
    } else {
      [arr[index], arr[index - 1]] = [arr[index - 1], arr[index]];
      index--;
    }
  }
  return arr;
}
console.log(gnomeSort([34, 2, 10, -9])); // O(n^2)
// The time complexity of this function is O(n^2) because it may require multiple passes through the array to sort it.
// The space complexity is O(1) because it sorts the array in place without requiring additional storage.
// Example of O(n^2)

function combSort(arr) {
  const n = arr.length;
  let gap = n;
  const shrink = 1.3;
  let sorted = false;

  while (!sorted) {
    gap = Math.floor(gap / shrink);
    if (gap < 1) gap = 1;
    sorted = true;

    for (let i = 0; i + gap < n; i++) {
      if (arr[i] > arr[i + gap]) {
        [arr[i], arr[i + gap]] = [arr[i + gap], arr[i]];
        sorted = false;
      }
    }
  }
  return arr;
}
console.log(combSort([5, 3, 8, 4, 2])); // O(n^2) in worst case
// The time complexity of this function is O(n^2) in the worst case because it may require multiple passes through the array to sort it.
// The space complexity is O(1) because it sorts the array in place without requiring additional storage.
// Example of O(n^2)

function oddEvenSort(arr) {
  let sorted = false;
  const n = arr.length;

  while (!sorted) {
    sorted = true;
    for (let i = 1; i < n - 1; i += 2) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        sorted = false;
      }
    }
    for (let i = 0; i < n - 1; i += 2) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        sorted = false;
      }
    }
  }
  return arr;
}
console.log(oddEvenSort([34, 2, 10, -9])); // O(n^2)
// The time complexity of this function is O(n^2) because it uses nested loops to sort the array in both odd and even phases.
// The space complexity is O(1) because it sorts the array in place without requiring additional storage.
// Example of O(n^2)

function cycleSort(arr) {
  const n = arr.length;
  for (let cycleStart = 0; cycleStart < n - 1; cycleStart++) {
    let item = arr[cycleStart];
    let pos = cycleStart;

    for (let i = cycleStart + 1; i < n; i++) {
      if (arr[i] < item) {
        pos++;
      }
    }

    if (pos === cycleStart) continue;

    while (item === arr[pos]) {
      pos++;
    }
    if (pos !== cycleStart) {
      [arr[pos], item] = [item, arr[pos]];
    }

    while (pos !== cycleStart) {
      pos = cycleStart;
      for (let i = cycleStart + 1; i < n; i++) {
        if (arr[i] < item) {
          pos++;
        }
      }
      while (item === arr[pos]) {
        pos++;
      }
      if (item !== arr[pos]) {
        [arr[pos], item] = [item, arr[pos]];
      }
    }
  }
  return arr;
}
console.log(cycleSort([3, 1, 5, 2, 4])); // O(n^2)
// The time complexity of this function is O(n^2) because it uses nested loops to find the correct position for each element and place it there.
// The space complexity is O(1) because it sorts the array in place without requiring additional storage.
// Example of O(n^2)
function bitonicSort(arr, low = 0, cnt = arr.length, dir = 1) {
  if (cnt > 1) {
    const k = Math.floor(cnt / 2);
    bitonicSort(arr, low, k, 1);
    bitonicSort(arr, low + k, k, 0);
    bitonicMerge(arr, low, cnt, dir);
  }
  return arr;
}
function bitonicMerge(arr, low, cnt, dir) {
  if (cnt > 1) {
    const k = Math.floor(cnt / 2);
    for (let i = low; i < low + k; i++) {
      if (arr[i] > arr[i + k] === dir) {
        [arr[i], arr[i + k]] = [arr[i + k], arr[i]];
      }
    }
    bitonicMerge(arr, low, k, dir);
    bitonicMerge(arr, low + k, k, dir);
  }
}
console.log(bitonicSort([12, 4, 7, 9, 1, 5, 3, 8])); // O(n log^2 n)
// The time complexity of this function is O(n log^2 n) because it recursively divides the array and merges it in a bitonic sequence.
// The space complexity is O(log n) because of the call stack used for recursion.
// Example of O(n log n)
function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}
console.log(quickSort([10, 7, 8, 9, 1, 5])); // O(n log n) on average
// The time complexity of this function is O(n log n) on average because it divides the array into smaller subarrays and sorts them recursively.
// The space complexity is O(log n) because of the call stack used for recursion.
// Example of O(n log n)

function heapSort(arr) {
  const n = arr.length;

  function heapify(arr, n, i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }
    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }
    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      heapify(arr, n, largest);
    }
  }

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }
  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }
  return arr;
}
console.log(heapSort([12, 11, 13, 5, 6, 7])); // O(n log n)
// The time complexity of this function is O(n log n) because it builds a heap and then repeatedly extracts the maximum element.
// The space complexity is O(1) because it sorts the array in place without requiring additional storage.
// Example of O(n log n)
