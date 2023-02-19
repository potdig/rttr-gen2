import { commentators } from '../default-value'
import type { NodeCG } from '../nodecg'
import { loadCommentatorsFromSpreadsheet } from '../spreadsheet/commentator'

export default function setupCommentators(nodecg: NodeCG) {
  nodecg.Replicant('commentators', {
    defaultValue: commentators,
  })
  loadCommentatorsFromSpreadsheet()

  nodecg.listenFor('updateCommentator', (_, cb) => {
    if (!cb || cb.handled) {
      return
    }
    loadCommentatorsFromSpreadsheet()
    cb && cb(null, true)
  })
}
