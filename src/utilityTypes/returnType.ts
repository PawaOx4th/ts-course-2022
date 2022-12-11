/**
 * Lesson : ReturnType.
 */

type Person = {
  name: string
  age: number
}
function get(person: Person, key: keyof Person) {
  return person[key]
}
type Fn = typeof get

// NOTE: type MyGetReturnType

// * type myGetReturnType = string | number
// type myGetReturnType = MyGetReturnType<Fn>;
