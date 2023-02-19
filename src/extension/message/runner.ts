import { runners } from '../default-value'
import type { NodeCG } from '../nodecg'
import { groups } from '~/util/groups'
import { loadRunnersFromSpreadsheet } from '../spreadsheet/runner'

export default function setupRunners(nodecg: NodeCG) {
  nodecg.Replicant('runners', {
    defaultValue: runners,
  })
  groups.forEach(group => {
    loadRunnersFromSpreadsheet(group)
  })

  nodecg.listenFor('updateRunner', (group, cb) => {
    if (!cb || cb.handled) {
      return
    }
    loadRunnersFromSpreadsheet(group)
    cb && cb(null, true)
  })
}
