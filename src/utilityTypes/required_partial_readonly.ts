/**
 * Lesson : Required, Partial and Readonly.
 */

type Person = {
  name: string
  age: number
}

type ReadOnlyPerson = Readonly<Person>

type PartialPerson = Partial<Person>

type RequiredPerson = Required<PartialPerson>
