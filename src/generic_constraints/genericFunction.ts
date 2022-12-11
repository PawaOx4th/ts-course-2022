/**
 * Lesson : Generic Functions.
 */

// function lastNum<T>(arr: T[], count: number) {
//   return arr.slice(arr.length - count)
// }
const lastNum = <T>(arr: T[], count: number) => {
  return arr.slice(arr.length - count)
}

lastNum([1, 2, 3, 4, 5, 6, 7], 3)
lastNum(["🍕", "🍉", "🥝", "🍧", "🥩"], 3)
