<script lang="ts">
  import VideoParts from './VideoParts.svelte'

  export let mirrorId
</script>

<div id="main-game">
  <VideoParts {mirrorId} progressWidth={60}/>
</div>

<style lang="scss" scoped>
  @import 'stylesheet/common.scss';

  #main-game {
    grid-row: 1;
    grid-column: 1 / 4;
    height: $viewHeight * 0.6;
  }
</style>
