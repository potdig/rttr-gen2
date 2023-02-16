import setupCommentators from './message/commentator'
import setupCurrentMC from './message/current-mc'
import setupCurrentRunners from './message/current-runner'
import setupRunners from './message/runner'
import type { NodeCG } from './nodecg'

export default (nodecg: NodeCG) => {
  setupRunners(nodecg)
  setupCommentators(nodecg)
  setupCurrentRunners(nodecg)
  setupCurrentMC(nodecg)
}
