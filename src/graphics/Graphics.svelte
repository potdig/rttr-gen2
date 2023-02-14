<script lang="ts">
  import GameArea from '../lib/graphics/GameArea.svelte'
  import Sidebar from '../lib/graphics/Sidebar.svelte'
  import type { Group } from '../types/group'

  export let mirrorId: Group
</script>

<Sidebar {mirrorId} />
<GameArea {mirrorId} />
