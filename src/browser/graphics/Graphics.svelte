<script lang="ts">
  import type { Group } from '../../types/group'
  import GameArea from './lib/GameArea.svelte'
  import Sidebar from './lib/Sidebar.svelte'

  export let mirrorId: Group
</script>

<Sidebar {mirrorId} />
<GameArea {mirrorId} />
