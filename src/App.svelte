<script lang="ts">
  import GameArea from './lib/GameArea.svelte'
  import Sidebar from './lib/Sidebar.svelte'

  export let mirrorId
</script>

<Sidebar {mirrorId} />
<GameArea {mirrorId} />
