<script lang="ts">
  import type { Group } from '~/types/group'
  import VideoParts from './VideoParts.svelte'

  export let mirrorId: Group
</script>

<div class="sub-game">
  <VideoParts {mirrorId} progressWidth={40} />
</div>
