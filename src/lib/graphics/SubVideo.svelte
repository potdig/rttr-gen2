<script lang="ts">
  import VideoParts from './VideoParts.svelte'

  export let mirrorId
</script>

<div class="sub-game">
  <VideoParts {mirrorId} progressWidth={40}/>
</div>
