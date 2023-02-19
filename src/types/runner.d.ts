import type { Group } from './group'

export type Runner = {
  group: Group
  order: number
  name: string
  gameTitle: string
  category: string
  console: string
  targetTime: string
  personalBest: string
  limitTime: string
  twitter: string
  streamText: string
  icon: string
}
