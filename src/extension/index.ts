import message from './message'
import type { NodeCG } from './nodecg'
import { set } from './util/nodecg'

export default (nodecg: NodeCG) => {
  set(nodecg)
  message(nodecg)
}
