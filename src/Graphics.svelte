<script lang="ts">
  import GameArea from './lib/graphics/GameArea.svelte'
  import Sidebar from './lib/graphics/Sidebar.svelte'

  export let mirrorId
</script>

<Sidebar {mirrorId} />
<GameArea {mirrorId} />
