import type { NodeCG } from './nodecg'
import { runners, currentRunners, commentators } from './default-value'

function setupRunners(nodecg: NodeCG) {
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

function setupCommentators(nodecg: NodeCG) {
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

function setupCurrentRunners(nodecg: NodeCG) {
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

function setupCurrentMC(nodecg: NodeCG) {
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

export default (nodecg: NodeCG) => {
  setupRunners(nodecg)
  setupCommentators(nodecg)
  setupCurrentRunners(nodecg)
  setupCurrentMC(nodecg)
}
