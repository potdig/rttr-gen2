import type { Group } from './group'
import type { Timer, TimerState } from './timer'

type UpdateCurrentRunnerArgs = {
  group: Group
  order: number
}

type ManipulateTimerArgs = {
  group: Group
  state: TimerState
}

export type MessageMap = {
  updateRunner: {
    data: Group
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
  manipulateTimer: {
    data: ManipulateTimerArgs
    result: boolean
  }
  manipulateAllTimer: {
    data: TimerState
    result: boolean
  }
  toggleRunnerSetup: {
    data: Group
    result: boolean
  }
  updateSetupText: {
    data: string
    result: boolean
  }
}
