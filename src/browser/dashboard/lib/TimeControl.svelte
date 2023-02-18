<script lang="ts">
  import { timerFor } from '~/browser/store/timer'
  import type { Group } from '~/types/group'

  export let mirrorId: Group
  $: timer = timerFor(mirrorId)
</script>

<div>
  <p id="subject">タイマー</p>
  <p>残り時間: {$timer?.format()}</p>
  <!--
            <button id="resetButton" onclick="timerReset();">リセット</button>
            <button id="startButton" onclick="timerStart();" disabled>スタート</button>
            <button id="stopButton" onclick="timerStop();" disabled>ストップ</button>
            <button id="successButton" onclick="timerSuccess();" disabled>記録達成</button>
            <br>
            <button id="reloadButton" onclick="reload();">更新</button>
            <button id="setupButton" onclick="setupRunner();">準備中にする</button>
            <button id="finishButton" onclick="finishRunner();">終了にする</button>
-->
</div>

<style scoped>
  button {
    margin-bottom: 0.2em;
  }

  img {
    display: block;
    width: 50px;
  }

  #subject {
    font-size: 1.6em;
    font-weight: bold;
  }

  p {
    margin: 0.2em 0;
  }
</style>
