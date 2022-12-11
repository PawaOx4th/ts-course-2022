interface Person {
  name: string
  age: number
  address: string
  tel: number
  status: boolean
}

// type PersonKey = keyof Person
// //  x | x |
// const person: PersonKey = "tel"

// type PersonAgeType = Person["age"]

// // NOTE: type PersonValues = string | number
// type PersonValues = Person[keyof Person]
// // string | number | boolean
// //  Person[age]

const person: Person = {
  name: "John",
  age: 28,
  address: "123",
  status: true,
  tel: 23456
}
function onPrintValueFromPerson(personKey: keyof Person) {
  console.log(`🧊 Person value of  ${personKey}:`, person[personKey])
}

onPrintValueFromPerson("tel")
