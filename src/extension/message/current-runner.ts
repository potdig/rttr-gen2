import { currentRunners } from '../default-value'
import type { NodeCG } from '../nodecg'

export default function setupCurrentRunners(nodecg: NodeCG) {
  const currentRunnersRep = nodecg.Replicant('currentRunners', {
    defaultValue: currentRunners,
  })

  nodecg.listenFor('updateCurrentRunner', ({ group, order }, cb) => {
    if (!cb || cb.handled) {
      return
    }

    console.log(`update current runner of ${group}: ${order}`)
    currentRunnersRep.value = [
      ...currentRunnersRep.value.filter(tuple => tuple[0] !== group),
      [group, order],
    ]

    cb && cb(null, true)
  })
}
