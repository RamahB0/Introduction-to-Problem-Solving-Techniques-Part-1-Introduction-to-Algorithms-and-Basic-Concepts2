// Function to perform Insertion Sort
function insertionSort(arr) {
  // Start from the second element (index 1)
  for (let i = 1; i < arr.length; i++) {
    // The element we want to insert into the sorted part
    let key = arr[i];

    // j will track the position to insert the key
    let j = i - 1;

    // Move elements of arr[0..i-1] that are greater than key
    // one position ahead to make space for the key
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }

    // Insert the key at its correct position
    arr[j + 1] = key;
  }

  // Return the sorted array
  return arr;
}

// Example usage:
let numbers = [8, 3, 5, 4, 6];
console.log("Original array:", numbers);
console.log("Sorted array:", insertionSort(numbers));