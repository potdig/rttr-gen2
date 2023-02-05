<script lang="ts">
  import { colorFor } from './common-color'

  export let mirrorId
  export let progressWidth

  $: color = colorFor(mirrorId)
</script>

<div id="video-parts" style="grid-template-columns: {progressWidth}px 1fr">
  <div id="progress" style="grid-template-rows: {progressWidth}px 1fr">
    <p id="mirror-id" style="background-color: {color}; height: {progressWidth}px; font-size: calc({progressWidth}px - 10px)">
      <span>{mirrorId}</span>
    </p>
    <div id="progress-bar" style="border-color: {color}">
      <div
        id="remaining-progress"
        style="clip-path: polygon(0% 20%, 100% 20%, 100% 100%, 0% 100%)"
      />
    </div>
  </div>
  <div id="video" style="border-color: {color}">
    <img src="/rttr_logo.png" alt="rttr_logo" />
  </div>
</div>

<style lang="scss" scoped>
  @import 'stylesheet/common.scss';

  #video-parts {
    display: grid;
    width: 100%;
    height: 100%;
  }

  #progress {
    display: grid;

    #mirror-id {
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: 'Fira Sans Condensed', sans-serif;
    }

    #progress-bar {
      display: flex;
      flex-direction: column;
      justify-content: end;
      background: $blackBackground;
      border-left: $border;

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

    img {
      width: 40%;
      filter: grayscale(100%) contrast(60%) brightness(15%) opacity(50%);
    }
  }
</style>
