import Color from 'color'

const color = {
  a: Color.rgb(250, 128, 114),
  b: Color.rgb(95, 130, 255),
  c: Color.rgb(255,165, 0),
  d: Color.rgb(57, 143, 57),
}

export function colorFor(mirrorId: string) {
  return color[mirrorId.toLowerCase()]
}
