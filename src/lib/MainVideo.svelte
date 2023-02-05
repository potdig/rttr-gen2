<script lang="ts">
  import { colorFor } from './common-color'

  export let mirrorId
  $: color = colorFor(mirrorId)
</script>

<div id="main-game">
  <div id="progress">
    <p id="mirror-id" style="background-color: {color}">
      <span>{mirrorId}</span>
    </p>
    <div id="progress-bar">
      <div id="remaining-progress" style=""/>
    </div>
  </div>
  <div id="video" style="border-color: {color}"/>
</div>

<style lang="scss" scoped>
  @import 'stylesheet/common.scss';
  $progressWidth: 60px;
  $transparentBlack: rgba($color: black, $alpha: 0.8);

  #main-game {
    grid-row: 1;
    grid-column: 1 / 4;
    display: grid;
    grid-template-columns: $progressWidth 1fr;
    width: 100%;
    height: $viewHeight * 0.6;
  }

  #progress {
    display: grid;
    grid-template-rows: $progressWidth 1fr;

    #mirror-id {
      height: $progressWidth;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: 'Fira Sans Condensed', sans-serif;
      font-size: $progressWidth - 10px;
    }

    #progress-bar {
      display: flex;
      flex-direction: column;
      justify-content: end;
      background: $transparentBlack;

      #remaining-progress {
        background: linear-gradient(yellow, gold);
        height: 100%;
        clip-path: polygon(0% 20%, 100% 20%, 100% 100%, 0% 100%);
      }
    }
  }

  #video {
    background-color: $transparentBlack;
    border: $border;
  }
</style>
