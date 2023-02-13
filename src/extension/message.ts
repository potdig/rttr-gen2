import type { NodeCG } from './nodecg'
import { runners } from './default-value'

export default (nodecg: NodeCG) => {
  const runnerRep = nodecg.Replicant('runners', {
    defaultValue: runners
  })

  nodecg.listenFor('updateRunner', (newRunner, cb) => {
    if (!cb || cb.handled) {
      return
    }
    console.log(`update runner of group ${newRunner.group} to order no.${newRunner.order}`)
    cb && cb(null, true)
  })
}