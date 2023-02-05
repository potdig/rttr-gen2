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
      <div
        id="remaining-progress"
        style="clip-path: polygon(0% 20%, 100% 20%, 100% 100%, 0% 100%)"
      />
    </div>
  </div>
  <div id="video" style="border-color: {color}">
    <img src="/rttr_logo.png" alt="rttr_logo">
    </div>
</div>

<style lang="scss" scoped>
  @import 'stylesheet/common.scss';
  $progressWidth: 60px;
  $blackBackground: linear-gradient(#333, #222);

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
      background: $blackBackground;

      #remaining-progress {
        background: linear-gradient(yellow, gold);
        height: 100%;
      }
    }
  }

  #video {
    display: flex;
    justify-content: center;
    align-items: center;
    background: $blackBackground;
    border: $border;

    img {
      width: 40%;
      filter: grayscale(100%) contrast(60%) brightness(15%) opacity(50%)
    }
  }
</style>
