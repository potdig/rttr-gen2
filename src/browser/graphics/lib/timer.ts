import { Duration } from 'luxon'
import type { Group } from '~/types/group'
import type { TimerState } from '~/types/timer'

export class TimerImpl {
  group: Group
  limitSeconds: number
  remainingSeconds: number
  state: TimerState

  constructor(
    group: Group,
    limitSeconds: number,
    remainingSeconds: number,
    state: TimerState
  ) {
    this.group = group
    this.limitSeconds = limitSeconds
    this.remainingSeconds = remainingSeconds
    this.state = state
  }

  public format() {
    if (this.state === 'Success') {
      return 'New PB!'
    }

    return Duration.fromObject({ seconds: this.remainingSeconds }).toFormat(
      'h:mm:ss'
    )
  }

  public percentage() {
    return (this.remainingSeconds / this.limitSeconds) * 100
  }
}
