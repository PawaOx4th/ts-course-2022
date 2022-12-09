import { Company, Employee } from "./type_alias"

const myCompany: Company = {
  companyName: "A",
  address: ""
}

const tarCompany: Company = {
  companyName: "A",
  address: ""
}

/* A type alias. */
// const employee : Employee = {
//   role: "admin",
//   age: ""
// }

const draftCompany: Company = tarCompany

function onDisplayMyCompany(param: Company) {}

onDisplayMyCompany(draftCompany)
