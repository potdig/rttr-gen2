import type { Group } from './group'
import type { Timer } from './timer'

type UpdateCurrentRunnerArgs = {
  group: Group
  order: number
}

export type MessageMap = {
  updateRunner: {
    result: boolean
  }
  updateCommentator: {
    result: boolean
  }
  updateCurrentRunner: {
    data: UpdateCurrentRunnerArgs
    result: boolean
  }
  updateCurrentMC: {
    data: Array<string>
    result: boolean
  }
  updateTimer: {
    data: Timer
    result: boolean
  }
}
