import type { Group } from './group'

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
}
