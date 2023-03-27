<script lang="ts">
  import type { Group } from '~/types/group'
  import { isSettingUp } from '~/browser/store/runner'
  import { timerFor } from '~/browser/store/timer'
  import { colorFor } from './common-color'

  export let mirrorId: Group
  export let videoType: 'main' | 'sub'

  $: setup = isSettingUp(mirrorId)
  $: timer = timerFor(mirrorId)
  $: time = $setup ? '-:--:--' : $timer?.format()
  $: polygonPercentage = $setup ? 100 : 100 - $timer?.percentage()
  $: color = colorFor(mirrorId)
  $: progressWidth = videoType === 'main' ? 70 : 50
</script>

<div id="progress" style="grid-template-columns: {progressWidth}px 1fr;">
  <p
    id="mirror-id"
    style="background-color: {color}; font-size: calc({progressWidth}px - 10px);"
  >
    <span>{mirrorId}</span>
  </p>
  <div id="progress-bar" style="border-color: {color}">
    <div
      id="remaining-progress"
      style="clip-path: polygon({polygonPercentage}% 0%, 100% 0%, 100% 100%, {polygonPercentage}% 100%)"
    />
    <p id="timer" style="font-size: calc({progressWidth}px - 16px);">{time}</p>
  </div>
</div>

<style lang="scss" scoped>
  @import 'stylesheet/common.scss';

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
      position: relative;
      flex-direction: column;
      justify-content: end;
      background: $blackBackground;

      #remaining-progress {
        background: linear-gradient(yellow, gold);
        height: 100%;
      }

      #timer {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        font-family: 'DSEG14-Classic';
        font-weight: bold;
        font-style: italic;
        color: dimgray;
        mix-blend-mode: multiply;
        opacity: 0.8;
      }
    }
  }
</style>
