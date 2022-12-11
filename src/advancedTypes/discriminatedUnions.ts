interface Triangle {
  base: number
  height: number
}

interface Rectangle {
  width: number
  height: number
}

interface Circle {
  radius: number
}

type Shape = Triangle | Rectangle | Circle

function areaCalculator(shape: Shape) {
  // circle : PI * radius ** 2
  // Rectangle : w * h
  // Triangle : 0.5 * base * height
}
