// In the toy factory of the North Pole, each toy has a unique identification number.

// However, due to an error in the toy machine, some numbers have been assigned to more than one toy.

// Find the first identification number that has been repeated, where the second occurrence has the smallest index!

// In other words, if there is more than one repeated number, you must return the number whose second occurrence appears first in the list. If there are no repeated numbers, return -1.

function findFirstRepeated(gifts) {
  const firstSeen = {};

  for (let i = 0; i < gifts.length; i++) {
    const currentGift = gifts[i];
    if (firstSeen[currentGift] !== undefined) return currentGift;

    firstSeen[currentGift] = i;
  }
  return -1;
}
