import { type Readable, derived, readable } from 'svelte/store'
import type { Group } from '~/types/group'
import type { Runner } from '~/types/runner'

const groups: Array<Group> = ['A', 'B', 'C', 'D']

const runners: Readable<Array<Runner>> = readable([], set => {
  window.nodecg.Replicant('runners').on('change', (newValue, _) => {
    set(newValue)
  })

  return () => {}
})

const currentRunners = derived(runners, $runners => {
  return new Map<Group, Runner>(
    groups.map(group => [
      group,
      $runners.find(runner => runner.group === group && runner.order === 1),
    ])
  )
})

export { currentRunners }
