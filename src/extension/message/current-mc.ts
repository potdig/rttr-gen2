import type { NodeCG } from '../nodecg'

export default function setupCurrentMC(nodecg: NodeCG) {
  const currentRunnersRep = nodecg.Replicant('currentMC', {
    defaultValue: [],
  })

  nodecg.listenFor('updateCurrentMC', (newValue, cb) => {
    if (!cb || cb.handled) {
      return
    }

    console.log(`update current MC: ${newValue}`)
    currentRunnersRep.value = newValue

    cb && cb(null, true)
  })
}
