import { runners } from '../default-value'
import type { NodeCG } from '../nodecg'

export default function setupRunners(nodecg: NodeCG) {
  const runnersRep = nodecg.Replicant('runners', {
    defaultValue: runners,
  })

  nodecg.listenFor('updateRunner', (_, cb) => {
    if (!cb || cb.handled) {
      return
    }
    console.log('update runner with data on spreadsheet')
    cb && cb(null, true)
  })
}
