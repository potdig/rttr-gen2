import type { Commentator } from './commentator'
import type { Group } from './group'
import type { Runner } from './runner'

export type ReplicantMap = {
  runners: Array<Runner>
  commentators: Array<Commentator>
  currentRunners: Array<[Group, number]>
  setupText: string
}
