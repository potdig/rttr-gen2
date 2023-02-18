import type { Group } from '~/types/group'
import { currentRunners } from '../default-value'
import type { NodeCG } from '../nodecg'
import TimerImpl from '../timer/timer'
import { manipulate } from '../timer/timer-manipulation'

function setTimerFor(group: Group, order: number, nodecg: NodeCG) {
  const runner = nodecg
    .readReplicant('runners')
    .find(runner => runner.group === group && runner.order === order)

  if (runner) {
    const timerRep = nodecg.Replicant('timers')
    const oldTimer = timerRep.value?.find(t => t.group === group)
    if (oldTimer) {
      manipulate(oldTimer, 'Stop')
    }

    const newTimer = new TimerImpl(group, runner.limitTime)
    timerRep.value = timerRep.value
      ? [...timerRep.value!.filter(t => t.group !== group), newTimer]
      : [newTimer]
  }
}

export default function setupCurrentRunners(nodecg: NodeCG) {
  const currentRunnersRep = nodecg.Replicant('currentRunners', {
    defaultValue: currentRunners,
  })

  nodecg.listenFor('updateCurrentRunner', ({ group, order }, cb) => {
    if (!cb || cb.handled) {
      return
    }

    console.log(`update current runner of ${group}: ${order}`)
    currentRunnersRep.value = [
      ...currentRunnersRep.value.filter(tuple => tuple[0] !== group),
      [group, order],
    ]

    setTimerFor(group, order, nodecg)

    cb && cb(null, true)
  })

  const timerRep = nodecg.Replicant('timers')
  if (timerRep.value?.length === 0) {
    currentRunnersRep.value.forEach(([group, order]) => {
      setTimerFor(group, order, nodecg)
    })
  }
}
