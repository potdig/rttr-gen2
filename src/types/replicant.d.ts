import type { Commentator } from './commentator'
import type { Group } from './group'
import type { Runner } from './runner'

export type ReplicantMap = {
  runners: Map<Group, Runner>
  commentators: Array<Commentator>
  setupText: string
}
