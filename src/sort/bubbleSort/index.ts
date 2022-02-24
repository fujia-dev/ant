const bubbleSort = <T>(arr: T[], isAscend = true) => {
  if (!Array.isArray(arr)) {
    throw TypeError(`the params should be an array type, but get ${arr}!`);
  }

  const len = arr.length;

  for (let i = 1; i < len; i++) {
    for (let j = 0; j < len - i; j++) {
      if (isAscend) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      } else {
        if (arr[j] < arr[j + 1]) {
          [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
        }
      }
    }
  }

  return arr;
};

export default bubbleSort;
