import Color from 'color'

const color = {
  a: new Color('red'),
  b: new Color('blue'),
  c: new Color('yellow'),
  d: new Color('green'),
}

export function colorFor(mirrorId: string) {
  return color[mirrorId.toLowerCase()]
}
