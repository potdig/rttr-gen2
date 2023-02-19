import type { NodeCG } from '../nodecg'
import { manipulate } from '../timer/timer-manipulation'

export default function setupTimer(nodecg: NodeCG) {
  const timerRep = nodecg.Replicant('timers', {
    defaultValue: [],
  })

  nodecg.listenFor('updateTimer', (timer, cb) => {
    if (!cb || cb.handled) {
      return
    }

    const oldTimer = timerRep.value.find(t => t.group === timer.group)
    if (oldTimer) {
      manipulate(oldTimer, 'Stop')
    }

    timerRep.value = timerRep.value
      ? [...timerRep.value.filter(t => t.group !== timer.group)]
      : [timer]

    cb && cb(null, true)
  })

  nodecg.listenFor('manipulateTimer', ({ group, state }, cb) => {
    if (!cb || cb.handled) {
      return
    }

    const timer = timerRep.value.find(t => t.group === group)
    if (!timer) {
      return
    }

    manipulate(timer, state)

    cb && cb(null, true)
  })

  nodecg.listenFor('manipulateAllTimer', (state, cb) => {
    if (!cb || cb.handled) {
      return
    }

    timerRep.value.forEach(timer => manipulate(timer, state))

    cb && cb(null, true)
  })
}
