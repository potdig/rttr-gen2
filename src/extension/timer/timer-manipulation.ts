import type { Timer, TimerState } from '~/types/timer'

function manipulate(timer: Timer, state: TimerState) {
  switch (state) {
    case 'Start':
      start(timer)
      break
    case 'Pause':
      pause(timer)
      break
    case 'Stop': // reset
      reset(timer)
      break
    case 'Success':
      success(timer)
      break
  }
}

function start(timer: Timer) {
  console.log('start')
  if (timer.state === 'Success') {
    return
  }

  timer.state = 'Start'
  timer.timerId = Number(setInterval(updateRemaining, 1000, timer))
  applyToReplicant(timer)
}

function pause(timer: Timer) {
  clearInterval(timer.timerId)
  timer.state = 'Pause'
  applyToReplicant(timer)
}

function reset(timer: Timer) {
  clearInterval(timer.timerId)
  timer.remainingSeconds = timer.limitSeconds
  timer.state = 'Stop'
  applyToReplicant(timer)
}

function success(timer: Timer) {
  clearInterval(timer.timerId)
  timer.remainingSeconds = timer.limitSeconds
  timer.state = 'Stop'
  applyToReplicant(timer)
}

function updateRemaining(timer: Timer) {
  timer.remainingSeconds--
  applyToReplicant(timer)
}

function applyToReplicant(timer: Timer) {
  globalThis.nodecg.sendMessage('updateTimer', timer)
}

export { manipulate }
