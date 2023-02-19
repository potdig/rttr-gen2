import type { Group } from '~/types/group'
import type { Runner } from '~/types/runner'

type RunnerAPIResponse = {
  id: string
  runner_name: string
  runner_name_katakana: string
  game_title: string
  category: string
  game_console: string
  target_time: string
  personal_best: string
  limit_time: string
  twitter: string
  stream_text: string
  stream_link: string
  icon: string
  commentator: string
  description: string
  pick_up_point: string
}

function loadRunnersFromSpreadsheet(group: Group) {
  const bundleConfig = globalThis.nodecg.bundleConfig
  const apiUrlPrefix = `https://script.google.com/macros/s/${bundleConfig.googleWebAppUrl}/exec?id=${bundleConfig.googleSpreadsheetId}&sheet=Group`
  fetch(`${apiUrlPrefix}${group}`)
    .then(response => response.json())
    .then(data => data as Array<RunnerAPIResponse>)
    .then(runners => {
      const loaded: Array<Runner> = runners.map(runner => ({
        group: runner.id.charAt(0) as Group,
        order: parseInt(runner.id.charAt(1)),
        name: runner.runner_name,
        gameTitle: runner.game_title,
        category: runner.category,
        console: runner.game_console,
        targetTime: runner.target_time,
        personalBest: runner.personal_best,
        limitTime: runner.limit_time,
        twitter: runner.twitter,
        streamLink: runner.stream_link,
        icon: runner.icon,
      }))
      const runnersRep = nodecg.Replicant('runners')
      runnersRep.value = runnersRep.value
        ? runnersRep.value
            .filter(runner => runner.group !== group)
            .concat(loaded)
        : loaded
    })
    .catch(e => console.error(`Failed to load runners of group ${group}`, e))
}

export { loadRunnersFromSpreadsheet }
