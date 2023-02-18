import { Duration } from 'luxon'
import type { Group } from '~/types/group'
import type { Timer, TimerState } from '~/types/timer'

function toSeconds(time: string) {
  return Duration.fromObject({
    hours: parseInt(time.split(':')[0]),
    minutes: parseInt(time.split(':')[1]),
    seconds: parseInt(time.split(':')[2]),
  }).as('seconds')
}

class TimerImpl implements Timer {
  group: Group
  limitSeconds: number
  remainingSeconds: number
  timerId: number | undefined
  state: TimerState

  constructor(group: Group, limit: string) {
    this.group = group
    this.limitSeconds = toSeconds(limit)
    this.remainingSeconds = toSeconds(limit)
    this.state = 'Stop'
  }
}

export default TimerImpl
