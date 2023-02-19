import { readable, type Readable } from 'svelte/store'

const setupText: Readable<string> = readable('', set => {
  window.nodecg.Replicant('setupText').on('change', newValue => {
    set(newValue)
  })
})

export { setupText }
