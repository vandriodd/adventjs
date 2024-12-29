// /**
//  * @param {string[]} names - Array of names to frame
//  * @returns {string} The framed names
//  */
// function createFrame(names) {
//   function findLongest(arr) {
//     let currentMax = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i].length > currentMax.length) {
//         currentMax = arr[i];
//       }
//     }

//     return currentMax;
//   }

//   let longestName = findLongest(names);
//   let finalFrame = "";

//   for (let i = 0; i < names.length; i++) {
//     let whiteSpaces = " ".repeat(longestName.length - names[i].length);
//     finalFrame += `* ${names[i]}${whiteSpaces} *\n`;
//   }

//   return (
//     "*".repeat(longestName.length + 4) +
//     "\n" +
//     finalFrame +
//     "*".repeat(longestName.length + 4)
//   );
// }

// /**
//  * @param {string[]} names - Array of names to frame
//  * @returns {string} The framed names
//  */
// function createFrame(names) {
//   let longestName = Math.max(...names.map((name) => name.length));
//   let finalFrame = "";

//   for (let i = 0; i < names.length; i++) {
//     let whiteSpaces = " ".repeat(longestName - names[i].length);
//     finalFrame += `* ${names[i]}${whiteSpaces} *\n`;
//   }

//   return (
//     "*".repeat(longestName + 4) +
//     "\n" +
//     finalFrame +
//     "*".repeat(longestName + 4)
//   );
// }

/**
 * @param {string[]} names - Array of names to frame
 * @returns {string} The framed names
 */
function createFrame(names) {
  let longestName = Math.max(...names.map((name) => name.length));
  let finalFrame = [];

  for (let i = 0; i < names.length; i++) {
    let whiteSpaces = " ".repeat(longestName - names[i].length);
    finalFrame.push(`* ${names[i]}${whiteSpaces} *`);
  }
  finalFrame.unshift("*".repeat(longestName + 4));
  finalFrame.push("*".repeat(longestName + 4));

  return finalFrame.join("\n");
}

const array = ["Nachanga", "Picaela", "Luz", "Balu"];
console.log(createFrame(array));
