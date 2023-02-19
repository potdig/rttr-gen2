<script lang="ts">
  import type { Group } from '~/types/group'
  import RunnerControl from './lib/RunnerControl.svelte'
  import TimeControl from './lib/TimeControl.svelte'

  export let mirrorId: Group
</script>

<TimeControl {mirrorId} />
<RunnerControl {mirrorId} />
