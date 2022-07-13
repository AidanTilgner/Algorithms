export default function MergeSort(items: number[]): number[] {
  return divide(items);
}

function divide(items: number[]): number[] {
  let halfLength = Math.ceil(items.length / 2); // Get Middle
  let low = items.slice(0, halfLength); // Get bottom half
  let high = items.slice(halfLength); // Get top half
  if (halfLength > 1) {
    // As long as there is more than one element
    low = divide(low); // Go recursively through the bottom half
    high = divide(high); // Same with the top half
  }
  return combine(low, high); // Then at the end, combine each array
}

function combine(low: number[], high: number[]): number[] {
  let indexLow = 0,
    indexHigh = 0,
    lengthLow = low.length,
    lengthHigh = high.length;

  let combined: number[] = []; // New array

  while (indexLow < lengthLow || indexHigh < lengthHigh) {
    // While one or both have elements
    let lowItem = low[indexLow];
    let highItem = high[indexHigh];

    if (!!lowItem) {
      // If lowitem exists
      if (!highItem) {
        // And highitem doesnt
        combined.push(lowItem); // Just go ahead and push the low item
        indexLow++; // Iterate that side
        continue;
      }
      if (lowItem <= highItem) {
        // Otherwise check to see which one is smaller
        combined.push(lowItem); // And then push
        indexLow++; // Iterate
        continue;
      }

      combined.push(highItem); // Otherwise push the highitem
      indexHigh++; // Iterate high
      continue;
    }
    if (!!highItem) {
      // Otherwise if low item doesn't exist and highitem does
      combined.push(highItem); // Just go ahead and push highitem
      indexHigh++;
    }
  }
  return combined;
}

let toMerge = [6, 2, 5, 3, 8, 12];

console.log("Unsorted", toMerge);
console.log("Sorted: ", MergeSort(toMerge));
