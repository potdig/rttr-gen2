<script lang="ts">
  import type { Group } from '~/types/group'
  import { timerFor } from '../store/timer'
  import RunnerControl from './lib/RunnerControl.svelte'

  export let mirrorId: Group
  $: timer = timerFor(mirrorId)
</script>

<RunnerControl {mirrorId} />
<div>
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
