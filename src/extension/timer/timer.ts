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

  start(): void {
    if (this.state === 'Success') {
      return
    }

    this.timerId = window.setInterval(this.updateRemaining, 1000)
    this.state = 'Start'
  }

  pause(): void {
    clearInterval(this.timerId)
  }

  reset(): void {
    clearInterval(this.timerId)
    this.remainingSeconds = this.limitSeconds
    this.state = 'Stop'
  }

  success(): void {
    clearInterval(this.timerId)
    this.remainingSeconds = this.limitSeconds
    this.state = 'Stop'
  }

  private updateRemaining() {
    if (this.remainingSeconds > 0) {
      this.remainingSeconds--
    } else {
      clearInterval(this.timerId)
    }
  }
}

export default TimerImpl
