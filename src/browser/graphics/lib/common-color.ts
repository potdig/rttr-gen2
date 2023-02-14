import Color from 'color'
import type { Group } from '~/types/group'

const color = new Map<Group, Color>([
  ['A', Color.rgb(250, 128, 114)],
  ['B', Color.rgb(95, 130, 255)],
  ['C', Color.rgb(255, 165, 0)],
  ['D', Color.rgb(57, 143, 57)],
])

export function colorFor(mirrorId: Group) {
  return color.get(mirrorId)
}
