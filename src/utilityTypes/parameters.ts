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
type MyGetParameters<T extends (...args: any) => any> = T extends (
  ...args: infer A
) => any
  ? A
  : never

// NOTE: type MyGetParameters
// * type myGetReturnType = [person:Person, key: 'name' | 'age]
type myGetReturnType = Parameters<Fn>
