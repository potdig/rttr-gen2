import type { Group } from '~/types/group'
import type { GroupOrder } from '~/types/group-order'

type CommentatorAPIResponse = {
  id: number
  name: string
  icon: string
  twitter: string
  link_id: string
}

function separateToGroupAndOrder(linkId: string): GroupOrder {
  return linkId.length === 2
    ? [linkId.charAt(0) as Group, parseInt(linkId.charAt(1))]
    : 'MC'
}

function loadCommentatorsFromSpreadsheet() {
  const bundleConfig = globalThis.nodecg.bundleConfig
  const apiUrl = `https://script.google.com/macros/s/${bundleConfig.googleWebAppUrl}/exec?id=${bundleConfig.googleSpreadsheetId}&sheet=Commentator`
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => data as Array<CommentatorAPIResponse>)
    .then(commentators => {
      nodecg.Replicant('commentators').value = commentators.map(
        commentator => ({
          name: commentator.name,
          icon: commentator.icon,
          linkId: separateToGroupAndOrder(commentator.link_id),
        })
      )
    })
    .catch(e => console.error('Failed to load commentators:', e))
}

export { loadCommentatorsFromSpreadsheet }
