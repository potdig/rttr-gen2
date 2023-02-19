import {
  derived,
  readable,
  type Readable,
  writable,
  type Writable,
  get,
} from 'svelte/store'
import type { Group } from '~/types/group'
import type { Runner } from '~/types/runner'

const runners: Readable<Array<Runner>> = readable([], set => {
  window.nodecg.Replicant('runners').on('change', newValue => {
    set(newValue)
  })

  return () => {}
})

const currentOrders: Writable<Array<[Group, number]>> = writable([], set => {
  window.nodecg.Replicant('currentRunners').on('change', newValue => {
    set(newValue)
  })

  return () => {}
})

const settingUp: Readable<Array<[Group, boolean]>> = readable([], set => {
  window.nodecg.Replicant('isSettingUp').on('change', newValue => {
    set(newValue)
  })
})

function nextRunner(group: Group) {
  currentOrders.update(orders => {
    // order が 指定グループでの走者数を超える場合は何もしない
    const old = orders.find(currentOrder => currentOrder[0] === group)
    if (old[1] < get(runners).filter(runner => runner.group === group).length) {
      window.nodecg.sendMessage('updateCurrentRunner', {
        group,
        order: old[1] + 1,
      })
    }

    return orders
  })
}

function prevRunner(group: Group) {
  currentOrders.update(orders => {
    // order が 1 を下回る場合は何もしない
    const old = orders.find(currentOrder => currentOrder[0] === group)
    if (old[1] > 1) {
      window.nodecg.sendMessage('updateCurrentRunner', {
        group,
        order: old[1] - 1,
      })
    }

    return orders
  })
}

const currentRunner = (group: Group): Readable<Runner> =>
  derived([runners, currentOrders], ([runners, currentOrders]) => {
    const currentOrder = currentOrders.find(order => order[0] === group)
    return runners.find(
      runner =>
        runner.group === group &&
        runner.order === (currentOrder ? currentOrder[1] : 0)
    )
  })

const isSettingUp = (group: Group): Readable<boolean> =>
  derived(settingUp, $settingUp => {
    if (!$settingUp || $settingUp.length === 0) {
      return false
    }

    return $settingUp?.find(groupSetup => groupSetup[0] === group)[1]
  })

export { currentRunner, nextRunner, prevRunner, isSettingUp }
