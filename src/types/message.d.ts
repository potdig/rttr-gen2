import type { Group } from './group'

type UpdateRunnerArgs = {
  group: Group
  order: number
}

export type MessageMap = {
  updateRunner: {
    data: UpdateRunnerArgs
    result: boolean
  }
}

