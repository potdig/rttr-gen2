import { isSettingUp } from '../default-value'
import type { NodeCG } from '../nodecg'

export default function setupRunnerSetup(nodecg: NodeCG) {
  const runnerSetupRep = nodecg.Replicant('isSettingUp', {
    defaultValue: isSettingUp,
  })

  nodecg.listenFor('toggleRunnerSetup', (group, cb) => {
    if (!cb || cb.handled) {
      return
    }

    const oldState = runnerSetupRep.value.find(setup => setup[0] === group)
    runnerSetupRep.value = [
      ...runnerSetupRep.value.filter(setup => setup[0] !== group),
      oldState ? [group, !oldState[1]] : [group, true],
    ]

    cb && cb(null, true)
  })
}
