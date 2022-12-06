const onSum = (a: number, b: number): number => {
  return 1
}

function onFormat(data: string | number | undefined) {
  switch (typeof data) {
    case "string":
      return data.charAt(1)
    case "number":
      return data.toFixed(2)
    case "undefined":
      return "🐳"

    default:
      return data
  }
}
