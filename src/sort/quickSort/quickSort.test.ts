import quickSort from '.';

const arrWith1 = [4];
const arrDisorderly = [3, 6, 1, 9, 16, 5, 2, 7, 4];
const arrOrderly = [1, 2, 3, 4, 5, 6, 7, 9, 16];

describe('quick sort', () => {
  it('the array less than 2', () => {
    // expect(quickSort(arrWith1).length).toEqual(1);
    expect(quickSort(arrWith1)).toEqual(expect.arrayContaining(arrWith1));
  });

  it('the array great than or equal to 2', () => {
    expect(arrDisorderly).toEqual(expect.arrayContaining(arrOrderly));
  });
});
