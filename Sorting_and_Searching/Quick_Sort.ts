const qs = (
  arr: number[],
  left: number = 0,
  right: number = arr.length - 1
) => {
  if (left < right) {
    let p = partition(arr, left, right);
    qs(arr, left, p - 1);
    qs(arr, p + 1, right);
  }

  return arr;
};

const partition = (
  arr: number[],
  left: number = 0,
  right: number = arr.length - 1
): number => {
  const pivot = arr[Math.floor((left + right) / 2)];
  let [i, j] = [left, right];

  while (i <= j) {
    while (arr[i] < pivot) {
      i++;
    }

    while (arr[j] > pivot) {
      j--;
    }

    if (i <= j) {
      swap(arr, i, j);
      i++;
      j--;
    }
  }

  return i;
};

const swap = (arr: number[], i: number, j: number) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

let nums = [6, 2, 5, 3, 8, 12];

console.log("Unsorted", nums);
console.log("Sorted: ", qs(nums));
