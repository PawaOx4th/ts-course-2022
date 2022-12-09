const name: string = "PawaOx4th"

const role: "admin" | "user" | "develop" = "admin"

interface Role {
  role: "admin" | "user" | "develop"
}

// const myRole: Role = {
//   role: "develop"
// }

const myRole: Role["role"] = "admin"

/**
 *
 * Type alias
 */

type RoleType = "admin" | "user" | "develop"
const tar: RoleType = "develop"

type Age = number | string
const myAge: Age = "23year"

export type Employee = {
  role: RoleType
  age: Age
}
const myEmployee: Employee = {
  role: "admin",
  age: 23
}

export type Company = {
  companyName: "A" | "B" | "C"
  address: string
}

type Personal = Company &
  Employee & {
    tel: string
    status: boolean
  }

const myCompany: Company["companyName"] = "B"

// const personal: Personal = {}

// type OnSumResult = (a: number, b: number) => number

// const onSum: OnSumResult = (a, b) => a + b

// console.log("🌺 :", onSum(1, 1))
