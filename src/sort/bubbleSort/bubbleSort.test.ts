import bubbleSort from '.';

const arrDisorderly = [3, 6, 1, 9, 16, 5, 2, 7, 4];
const arrAscend = [1, 2, 3, 4, 5, 6, 7, 9, 16];
const arrDescend = [16, 9, 7, 6, 5, 4, 3, 2, 1];

describe('bubble sort', () => {
  it('ascend sort', () => {
    expect(bubbleSort([...arrDisorderly])).toEqual(expect.arrayContaining(arrAscend));
  });

  it('descend sort', () => {
    expect(bubbleSort([...arrDisorderly], false)).toEqual(expect.arrayContaining(arrDescend));
  });
});
