<script lang="ts">
  import VideoParts from './VideoParts.svelte'

  export let mirrorId
</script>

<div class="sub-game">
  <VideoParts {mirrorId}/>
</div>

<style lang="scss" scoped>
</style>
