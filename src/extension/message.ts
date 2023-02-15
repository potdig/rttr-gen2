import type { NodeCG } from './nodecg'
import { runners, currentRunners } from './default-value'

export default (nodecg: NodeCG) => {
  const runnerRep = nodecg.Replicant('runners', {
    defaultValue: runners,
  })

  nodecg.listenFor('updateRunner', (newRunner, cb) => {
    if (!cb || cb.handled) {
      return
    }
    console.log('update runner with data on spreadsheet')
    cb && cb(null, true)
  })

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
