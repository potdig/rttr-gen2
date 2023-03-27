<script lang="ts">
  import type { Group } from '~/types/group'
  import { colorFor } from './common-color'
  import ProgressBar from './ProgressBar.svelte'

  export let mirrorId: Group

  $: color = colorFor(mirrorId)
</script>

<div id="main-game">
  <div id="video-parts">
    <ProgressBar {mirrorId} videoType="main" />
    <div id="video" style="border-color: {color}">
      <img src="/assets/rttr-gen2/materials/rttr_logo.png" alt="rttr_logo" />
    </div>
  </div>
</div>

<style lang="scss" scoped>
  @import 'stylesheet/common.scss';

  #main-game {
    grid-row: 1;
    grid-column: 1 / 4;
  }

  #video-parts {
    display: grid;
    grid-auto-flow: column;
    grid-template-rows: $mainProgressWidth $mainVideoHeight;
    width: 100%;
    height: 100%;
  }

  #video {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: $blackBackground;
    border: $border;
    box-sizing: border-box;
    opacity: 0.95;

    img {
      width: 40%;
      filter: grayscale(100%) contrast(60%) brightness(15%) opacity(50%);
    }
  }
</style>
