import { type Readable, derived, readable } from 'svelte/store'
import type { Group } from '~/types/group'
import type { Runner } from '~/types/runner'

const runners: Readable<Array<Runner>> = readable([], set => {
  window.nodecg.Replicant('runners').on('change', (newValue, _) => {
    set(newValue)
  })

  return () => {}
})

const currentOrders: Readable<Array<[Group, number]>> = readable([], set => {
  window.nodecg.Replicant('currentRunners').on('change', (newValue, _) => {
    set(newValue)
  })
})

const currentRunners = derived([runners, currentOrders], $values => {
  const [runners, currentOrders] = $values

  return new Map<Group, Runner>(
    currentOrders.map(([group, order]) => [
      group,
      runners.find(runner => runner.group === group && runner.order === order),
    ])
  )
})

export { currentRunners }
