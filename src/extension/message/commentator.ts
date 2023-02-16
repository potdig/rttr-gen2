import { commentators } from '../default-value'
import type { NodeCG } from '../nodecg'

export default function setupCommentators(nodecg: NodeCG) {
  const commentatorsRep = nodecg.Replicant('commentators', {
    defaultValue: commentators,
  })

  nodecg.listenFor('updateCommentator', (_, cb) => {
    if (!cb || cb.handled) {
      return
    }
    console.log('update commentator with data on spreadsheet')
    cb && cb(null, true)
  })
}
