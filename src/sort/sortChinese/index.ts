const sortChinese = (arr: string[]) => {
  return arr.sort((a, b) => a.localeCompare(b, 'zh-CN'));
};

export default sortChinese;
