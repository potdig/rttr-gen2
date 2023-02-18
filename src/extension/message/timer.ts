import type { NodeCG } from '../nodecg'
import { TimerManipulator } from '../timer/timer-manipulation'

export default function setupTimer(nodecg: NodeCG) {
  const timerRep = nodecg.Replicant('timers', {
    defaultValue: [],
  })

  nodecg.listenFor('manipulateTimer', ({ group, state }, cb) => {
    if (!cb || cb.handled) {
      return
    }

    const timer = timerRep.value.find(t => t.group === group)
    const timerManipulator = new TimerManipulator(nodecg)

    if (!timer) {
      return
    }

    timerManipulator.manipulate(timer, state)

    cb && cb(null, true)
  })
}
