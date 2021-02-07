const orderBreaker = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const [prevItem, currentItem, nextItem] = [arr[i - 1], arr[i], arr[i + 1]];
    if (
      (prevItem <= nextItem && (prevItem > currentItem || currentItem > nextItem)) ||
      (!prevItem && currentItem > nextItem) ||
      (!nextItem && prevItem > currentItem)
    ) {
      return currentItem;
    }
  }
};

const testArr = [1001, 991, 992, 993, 994, 995, 996];

console.log(orderBreaker(testArr)); // 1001
