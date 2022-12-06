const myArray: Array<string> = ["🐳", "Hello", 1]

// const myAges: Array<number> = [1, 2, 3, 4, "1"]
const myAges: (string | number | boolean | null)[] = [
  1,
  2,
  3,
  4,
  "1",
  false,
  null
]
const myAges2: Array<string | number | boolean | null> = [1, "1", false, null]

const question: boolean[] = [false, true, false]

/**
 *
 * @description This a Tuple type.
 */
const hexColor: [number, string, boolean] = [1, "1", true]
