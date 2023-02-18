<script lang="ts">
  import type { Group } from '~/types/group'
  import { currentRunner, nextRunner, prevRunner } from '../store/runner'
  import { timerFor } from '../store/timer'

  export let mirrorId: Group
  $: runner = currentRunner(mirrorId)
  $: timer = timerFor(mirrorId)
  $: iconPath = `/assets/rttr-gen2/runner-icons/${$runner?.icon}`

  function prev() {
    prevRunner(mirrorId)
  }

  function next() {
    nextRunner(mirrorId)
  }
</script>

<div>
  <button on:click={prev}>前走者</button>
  <button on:click={next}>次走者</button>
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
<div>
  <img id="iconImage" src={iconPath} alt="icon" />
  <p>名前: {$runner?.name}</p>
  <p>ゲーム名: {$runner?.gameTitle}</p>
  <p>カテゴリ: {$runner?.category}</p>
  <p>使用ハード: {$runner?.console}</p>
  <p>PBタイム: {$runner?.personalBest}</p>
  <p>目標タイム: {$runner?.targetTime}</p>
  <p>持ち時間: {$runner?.limitTime}</p>
  <p>Twitter: {$runner?.twitter}</p>
  <p>配信先: {$runner?.streamLink}</p>
</div>
