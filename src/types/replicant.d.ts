import type { Commentator } from './commentator'
import type { Group } from './group'
import type { Runner } from './runner'
import type { Timer } from './timer'

export type ReplicantMap = {
  runners: Array<Runner>
  commentators: Array<Commentator>
  currentRunners: Array<[Group, number]>
  timers: Array<Timer>
  currentMC: Array<string>
  setupText: string
}
