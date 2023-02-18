<script lang="ts">
  import { timerFor } from '~/browser/store/timer'
  import type { Group } from '~/types/group'
  import type { TimerState } from '~/types/timer'

  export let mirrorId: Group
  $: timer = timerFor(mirrorId)

  function start() {
    manipulate('Start')
  }

  function pause() {
    manipulate('Pause')
  }

  function reset() {
    manipulate('Stop')
  }

  function success() {
    manipulate('Success')
  }

  function manipulate(state: TimerState) {
    window.nodecg.sendMessage('manipulateTimer', {
      group: mirrorId,
      state,
    })
  }
</script>

<div id="timer-control">
  <p id="subject">タイマー</p>
  <p>残り時間: {$timer?.format()}</p>
  <div id="buttons">
    <button on:click={start}>スタート</button>
    <button on:click={pause}>ストップ</button>
    <button on:click={reset}>リセット</button>
    <button on:click={success}>記録達成</button>
    <!--
            <br>
            <button id="reloadButton" onclick="reload();">更新</button>
            <button id="setupButton" onclick="setupRunner();">準備中にする</button>
            <button id="finishButton" onclick="finishRunner();">終了にする</button>
-->
  </div>
</div>

<style scoped>
  #timer-control {
    width: 100%;
  }

  p {
    margin: 0.2em 0;
  }

  #buttons {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.2em;
  }

  #subject {
    font-size: 1.6em;
    font-weight: bold;
  }
</style>
