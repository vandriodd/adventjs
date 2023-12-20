/* In Santa's workshop, a mischievous elf has been playing around with the gift
production line, adding or removing an unplanned step.

You have the original sequence of original manufacturing steps and the modified
sequence that may include an extra step or be missing a step.

Your task is to write a function that identifies and returns the first extra step
that was added or removed in the manufacturing chain. If there is no difference
between the sequences, return an empty string. 

- There will always be one different step or none.
- The modification can occur anywhere in the string.
- The original steps could be empty */

function findNaughtyStep(original, modified) {
  const minLength = Math.min(original.length, modified.length);

  for (let i = 0; i < minLength; i++) {
    if (original[i] !== modified[i]) {
      return original.length < modified.length ? modified[i] : original[i];
    }
  }

  if (original.length < modified.length) {
    return modified[minLength];
  } else if (original.length > modified.length) {
    return original[minLength];
  } else {
    return '';
  }
}
