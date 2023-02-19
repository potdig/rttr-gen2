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
  if (timer.state === 'Start' || timer.state === 'Success') {
    return
  }

  timer.state = 'Start'
  timer.timerId = Number(setInterval(updateRemaining, 1000, timer))
  applyToReplicant(timer)
}

function pause(timer: Timer) {
  if (
    timer.state === 'Pause' ||
    timer.state === 'Stop' ||
    timer.state === 'Success'
  ) {
    return
  }

  clearInterval(timer.timerId)
  timer.state = 'Pause'
  applyToReplicant(timer)
}

function reset(timer: Timer) {
  if (timer.state === 'Stop' || timer.state === 'Success') {
    return
  }

  clearInterval(timer.timerId)
  timer.remainingSeconds = timer.limitSeconds
  timer.state = 'Stop'
  applyToReplicant(timer)
}

function success(timer: Timer) {
  if (timer.state === 'Success') {
    return
  }

  clearInterval(timer.timerId)
  timer.remainingSeconds = timer.limitSeconds
  timer.state = 'Stop'
  applyToReplicant(timer)
}

function updateRemaining(timer: Timer) {
  timer.remainingSeconds--
  if (timer.remainingSeconds <= 0) {
    clearInterval(timer.timerId)
  }
  applyToReplicant(timer)
}

function applyToReplicant(timer: Timer) {
  globalThis.nodecg.sendMessage('updateTimer', timer)
}

export { manipulate }
