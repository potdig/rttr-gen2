<script lang="ts">
  import type { Group } from '~/types/group'
  import { timerFor } from '../store/timer'
  import RunnerControl from './lib/RunnerControl.svelte'
  import TimeControl from './lib/TimeControl.svelte'

  export let mirrorId: Group
  $: timer = timerFor(mirrorId)
</script>

<RunnerControl {mirrorId} />
<TimeControl {mirrorId} />
