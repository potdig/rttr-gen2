import type { NodeCG } from '../nodecg'

declare global {
  var nodecg: NodeCG
}

function set(instance: NodeCG) {
  globalThis.nodecg = instance
}

export { set }
