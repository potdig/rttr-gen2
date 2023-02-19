import type { NodeCG } from '../nodecg'

export default function setupSetupText(nodecg: NodeCG) {
  const setupTextRep = nodecg.Replicant('setupText', {
    defaultValue: 'Please wait...',
  })

  nodecg.listenFor('updateSetupText', (text, cb) => {
    if (!cb || cb.handled) {
      return
    }
    setupTextRep.value = text
    cb && cb(null, true)
  })
}
