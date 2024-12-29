/**
 * @param {number[]} gifts - The array of gifts to prepare
 * @returns {number[]} An array with the prepared gifts
 */
function prepareGifts(gifts) {
  function sort(array) {
    for (let i = 1; i < array.length; i++) {
      let currentValue = array[i];
      let j = i - 1;

      for (j; j >= 0 && array[j] > currentValue; j--) {
        array[j + 1] = array[j];
      }

      array[j + 1] = currentValue;
    }
    return array;
  }

  sort(gifts);
  let finalGifts = [];

  for (let i = 0; i < gifts.length; i++) {
    if (gifts[i] !== gifts[i + 1]) {
      finalGifts.push(gifts[i]);
    }
  }

  return finalGifts;
}
