type VerticalAlignment = "top" | "bottom"
type HorizontalAlignment = "left" | "right"

// NOTE: V1
// type Alignment = "" | "top-right" | "bottom-left" | "bottom-right"

type Alignment = `${VerticalAlignment}-${HorizontalAlignment}`
