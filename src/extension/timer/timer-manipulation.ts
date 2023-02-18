import type { Timer, TimerState } from '~/types/timer'
import type { NodeCG } from '../nodecg'

class TimerManipulator {
  nodecg: NodeCG

  constructor(nodecg: NodeCG) {
    this.nodecg = nodecg
  }

  manipulate(timer: Timer, state: TimerState) {
    switch (state) {
      case 'Start':
        this.start(timer)
        break
      case 'Pause':
        this.pause(timer)
        break
      case 'Stop': // reset
        this.reset(timer)
        break
      case 'Success':
        this.success(timer)
        break
    }
  }

  private start(timer: Timer) {
    console.log('start')
    if (timer.state === 'Success') {
      return
    }

    timer.state = 'Start'
    timer.timerId = window.setInterval(this.updateRemaining, 1000, timer)
    this.applyToReplicant(timer)
  }

  pause(timer: Timer) {
    clearInterval(timer.timerId)
    timer.state = 'Pause'
    this.applyToReplicant(timer)
  }

  reset(timer: Timer) {
    clearInterval(timer.timerId)
    timer.remainingSeconds = timer.limitSeconds
    timer.state = 'Stop'
    this.applyToReplicant(timer)
  }

  success(timer: Timer) {
    clearInterval(timer.timerId)
    timer.remainingSeconds = timer.limitSeconds
    timer.state = 'Stop'
    this.applyToReplicant(timer)
  }

  private updateRemaining(timer: Timer) {
    timer.remainingSeconds--
    this.applyToReplicant(timer)
  }

  private applyToReplicant(timer: Timer) {
    const timerRep = this.nodecg.Replicant('timers')
    timerRep.value = timerRep.value
      ? [...timerRep.value.filter(t => t.group !== timer.group)]
      : [timer]
  }
}

export { TimerManipulator }
