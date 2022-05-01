export interface Box {
  brushes: Brush[]
}

export interface Brush {
  color: string,
  replacementBrushCount: number,
  brushCount: number
}
