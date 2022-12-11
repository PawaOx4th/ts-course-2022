/**
 * Lesson : Parameters<T>
 */
type Person = {
  name: string
  age: number
}
function get(person: Person, key: keyof Person) {
  return person[key]
}
type Fn = typeof get

// NOTE: type MyGetParameters
// * type myGetReturnType = [person:Person, key: 'name' | 'age]
// type myGetReturnType = MyGetParameters<Fn>
