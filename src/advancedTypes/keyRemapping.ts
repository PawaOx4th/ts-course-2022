/****************************************************************
 * Lesson : Key Remapping.
 ****************************************************************/

// type Person = {
//   name: string
//   age: number
// }

interface Person {
  name: string
  age: number
}

/**
 * TODO: 1
 * Example.
 */
// type PersonSubscribers = {
//   name: (key: "name", value: string) => void
//   age: (key: "age", value: number) => void
// }
type PersonSubscribers = {
  [K in keyof Person]: (key: K, value: Person[K]) => void
}

/**
 * TODO: 2
 * Example.
 */
// type PersonSubscribersAddChangeWord = {
//   nameOnChange: (key: "name", value: string) => void;
//   ageOnChange: (key: "age", value: number) => void;
// }
type PersonSubscribersAddChangeWord = {
  [K in keyof Person as `${K}OnChange`]: (key: K, value: Person[K]) => void
}
