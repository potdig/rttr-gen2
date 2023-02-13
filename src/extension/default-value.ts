import type { Group } from '../types/group'
import type { Runner } from '../types/runner'

const runners = new Map<Group, Runner>([
  [
    'A',
    {
      name: 'Runner A',
      gameTitle: 'Game A',
      category: 'Any%',
      console: 'AAA',
      targetTime: '1:00:00',
      personalBest: '1:10:00',
      limitTime: '3:00:00',
      twitter: '@runner_a',
      streamLink: 'https://twitch.com/runner_a',
      icon: 'a.png',
    },
  ],
  [
    'B',
    {
      name: 'Runner B',
      gameTitle: 'Game B',
      category: 'Bny%',
      console: 'BBB',
      targetTime: '1:00:00',
      personalBest: '1:10:00',
      limitTime: '3:00:00',
      twitter: '@runner_b',
      streamLink: 'https://twitch.com/runner_b',
      icon: 'b.png',
    },
  ],
  [
    'C',
    {
      name: 'Runner C',
      gameTitle: 'Game C',
      category: 'Cny%',
      console: 'CCC',
      targetTime: '1:00:00',
      personalBest: '1:10:00',
      limitTime: '3:00:00',
      twitter: '@runner_c',
      streamLink: 'https://twitch.com/runner_c',
      icon: 'c.png',
    },
  ],
  [
    'D',
    {
      name: 'Runner D',
      gameTitle: 'Game D',
      category: 'Dny%',
      console: 'DDD',
      targetTime: '1:00:00',
      personalBest: '1:10:00',
      limitTime: '3:00:00',
      twitter: '@runner_d',
      streamLink: 'https://twitch.com/runner_d',
      icon: 'd.png',
    },
  ],
])
export { runners }
