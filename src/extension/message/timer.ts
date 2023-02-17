import type { NodeCG } from '../nodecg'

export default function setupTimer(nodecg: NodeCG) {
  const timerRep = nodecg.Replicant('timers', {
    defaultValue: [],
  })

  nodecg.listenFor('updateTimer', (timer, cb) => {
    if (!cb || cb.handled) {
      return
    }
    timerRep.value = [
      ...timerRep.value.filter(t => t.group !== timer.group),
      timer,
    ]
    console.log(timerRep.value.map(t => t.group))
    cb && cb(null, true)
  })
}
