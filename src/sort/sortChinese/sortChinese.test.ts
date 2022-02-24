import sortChinese from './index';

const arrDisorderly = ['武汉', '郑州', '太原', '济南', '沈阳', '大连'];
const arrOrderly = ['大连', '济南', '济南', '沈阳', '太原', '郑州'];

describe('sort Chinese', () => {
  it('order by first letter of Chinese', () => {
    expect(sortChinese([...arrDisorderly])).toEqual(expect.arrayContaining(arrOrderly));
  });
});
