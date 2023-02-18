import type { DateTime } from 'luxon'
import type { Group } from './group'

type TimerState = 'Stop' | 'Start' | 'Pause' | 'Success'

interface Timer {
  group: Group
  limitSeconds: number
  remainingSeconds: number
  state: TimerState
  timerId: number | undefined
}

export { Timer, TimerState }
