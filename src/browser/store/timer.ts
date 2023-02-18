import { derived, readable, type Readable } from 'svelte/store'
import type { Group } from '~/types/group'
import { TimerImpl } from '../graphics/lib/timer'

const timers: Readable<Array<TimerImpl>> = readable([], set => {
  window.nodecg.Replicant('timers').on('change', newValue => {
    set(
      newValue.map(
        ({ group, limitSeconds, remainingSeconds, state }) =>
          new TimerImpl(group, limitSeconds, remainingSeconds, state)
      )
    )
  })
})

const timerFor = (group: Group) =>
  derived(timers, $timers => $timers.find(timer => timer.group === group))

export { timerFor }
