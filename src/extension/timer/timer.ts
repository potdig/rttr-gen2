import { DateTime, Duration } from 'luxon'
import type { Group } from '~/types/group'
import type { Timer, TimerState } from '~/types/timer'

class TimerImpl implements Timer {
  group: Group
  limitSeconds: number
  private startsAt: DateTime | undefined
  private pausesAt: DateTime | undefined
  remainingSeconds: number
  private timer: NodeJS.Timer | undefined
  state: TimerState

  constructor(group: Group, limit: string) {
    this.group = group
    this.limitSeconds = this.toSeconds(limit)
    this.remainingSeconds = this.toSeconds(limit)
    this.state = 'Stop'
  }

  start(): void {
    if (this.state === 'Success') {
      return
    }

    if (this.state === 'Pause') {
      // ポーズしてた時間分 startsAt を遅らせる
      this.startsAt = this.startsAt!.plus(this.durationFromNow(this.pausesAt!))
      this.pausesAt = undefined
    } else {
      this.startsAt = DateTime.now()
    }

    this.timer = setInterval(this.updateRemaining, 1000)
    this.state = 'Start'
  }

  pause(): void {
    clearInterval(this.timer)
    this.pausesAt = DateTime.now()
  }

  reset(): void {
    clearInterval(this.timer)
    this.startsAt = undefined
    this.remainingSeconds = this.limitSeconds
    this.state = 'Stop'
  }

  success(): void {
    clearInterval(this.timer)
    this.startsAt = undefined
    this.remainingSeconds = this.limitSeconds
    this.state = 'Stop'
  }

  private updateRemaining() {
    this.remainingSeconds = this.durationFromNow(this.startsAt!).seconds
  }

  private toSeconds = (time: string) =>
    Duration.fromObject({
      hours: parseInt(time.split(':')[0]),
      minutes: parseInt(time.split(':')[1]),
      seconds: parseInt(time.split(':')[2]),
    }).as('seconds')

  private durationFromNow = (dateTime: DateTime) =>
    DateTime.now().diff(dateTime, 'seconds')
}

export default TimerImpl
