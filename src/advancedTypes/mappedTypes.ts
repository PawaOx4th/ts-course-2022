interface Course {
  title: string
  credit: number
}

/**
 * TODO: 1.
 */
// type CourseReadOnly = {
//   readonly title : string
//   readonly credit : number
// }
type CourseReadOnly = {
  readonly [K in keyof Course]: Course[K]
}

/**
 * TODO: 2.
 */
// type CourseReadOnlyWithDescription = {
//  readonly title : string
//  readonly credit : number
//  description : string
// }
type CourseReadOnlyWithDescription = CourseReadOnly & {
  description: string
}

/**
 * TODO: 3.
 */
// type CourseOptional = {
//   title?: string
//   credit?: number
// }
type CourseOptional = {
  [K in keyof Course]?: Course[K]
}

/**
 * TODO: 4.
 * Without  `?`
 */
type CourseOptionalWithDescription = {
  [K in keyof CourseOptional]-?: CourseOptional[K]
}
