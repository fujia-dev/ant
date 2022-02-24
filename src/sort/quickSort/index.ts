const quickSort = <T>(arr: T[]): T[] => {
  if (!Array.isArray(arr)) {
    throw TypeError(`the params should be an array type, but get ${arr}!`);
  }

  const len = arr.length;

  if (len < 2) return arr;

  const left: T[] = [];
  const right: T[] = [];
  const mid = arr.splice(Math.floor(len / 2), 1)[0];

  for (let i = 0; i < len; i++) {
    const cur = arr[i];

    if (cur < mid) {
      left.push(cur);
    } else {
      right.push(cur);
    }
  }

  return quickSort(left).concat(mid, quickSort(right));
};

export default quickSort;
