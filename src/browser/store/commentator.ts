import { derived, readable, type Readable } from 'svelte/store'
import type { Commentator } from '~/types/commentator'
import type { GroupOrder } from '~/types/group-order'
import { groups } from '~/util/groups'
import { currentRunner } from './runner'

const commentators: Readable<Array<Commentator>> = readable([], set => {
  window.nodecg.Replicant('commentators').on('change', (newValue, _) => {
    set(newValue)
  })
})

const currentCommentators: Readable<Array<Commentator>> = derived(
  [commentators, ...groups.map(group => currentRunner(group))],
  ([commentators, ...currentRunners]) => {
    const currentGroupOrders: Array<GroupOrder> = currentRunners.map(runner => [
      runner?.group,
      runner?.order,
    ])
    return commentators.filter(
      commentator =>
        commentator.linkId === 'MC' ||
        currentGroupOrders.some(
          groupOrder =>
            groupOrder[0] === commentator.linkId[0] &&
            groupOrder[1] === commentator.linkId[1]
        )
    )
  }
)

export { currentCommentators }
