<script lang="ts">
  import type { Group } from '~/types/group'
  import { isSettingUp } from '~/browser/store/runner'
  import { timerFor } from '~/browser/store/timer'
  import { colorFor } from './common-color'

  export let mirrorId: Group

  $: setup = isSettingUp(mirrorId)
  $: timer = timerFor(mirrorId)
  $: polygonPercentage = $setup ? 100 : 100 - $timer?.percentage()
  $: color = colorFor(mirrorId)
</script>

<div id="main-game">
  <div id="video-parts">
    <div id="progress" style="">
      <p id="mirror-id" style="background-color: {color}; ">
        <span>{mirrorId}</span>
      </p>
      <div id="progress-bar" style="border-color: {color}">
        <div
          id="remaining-progress"
          style="clip-path: polygon(0% {polygonPercentage}%, 100% {polygonPercentage}%, 100% 100%, 0% 100%)"
        />
      </div>
    </div>
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

  #progress {
    grid-template-columns: $mainProgressWidth 1fr;
    display: grid;

    #mirror-id {
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: 'Fira Sans Condensed', sans-serif;
      font-size: calc($mainProgressWidth - 10px);
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
