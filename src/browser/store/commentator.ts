import { derived, readable, type Readable } from 'svelte/store'
import type { Commentator } from '~/types/commentator'
import type { Group } from '~/types/group'
import type { GroupOrder } from '~/types/group-order'
import { currentRunner } from './runner'

const groups: Array<Group> = ['A', 'B', 'C', 'D']

const commentators: Readable<Array<Commentator>> = readable([], set => {
  window.nodecg.Replicant('commentators').on('change', (newValue, _) => {
    set(newValue)
  })
})

const currentCommentators: Readable<Array<Commentator>> = derived(
  // TODO: MC に対応する
  [commentators, ...groups.map(group => currentRunner(group))],
  ([commentators, ...currentRunners]) => {
    const currentGroupOrders: Array<GroupOrder> = currentRunners.map(runner => [
      runner?.group,
      runner?.order,
    ])
    return commentators.filter(commentator =>
      currentGroupOrders.some(
        groupOrder =>
          groupOrder[0] === commentator.linkId[0] &&
          groupOrder[1] === commentator.linkId[1]
      )
    )
  }
)

export { currentCommentators }
