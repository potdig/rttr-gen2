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

  nodecg.listenFor('updateRunner', (_, cb) => {
    if (!cb || cb.handled) {
      return
    }
    console.log('update runner with data on spreadsheet')
    cb && cb(null, true)
  })
}
