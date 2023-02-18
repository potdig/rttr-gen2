<script lang="ts">
  import type { Group } from '~/types/group'
  import { currentRunner, nextRunner, prevRunner } from '~/browser/store/runner'

  export let mirrorId: Group
  $: runner = currentRunner(mirrorId)
  $: iconPath = `/assets/rttr-gen2/runner-icons/${$runner?.icon}`

  function prev() {
    prevRunner(mirrorId)
  }

  function next() {
    nextRunner(mirrorId)
  }
</script>

<div>
  <p id="subject">走者</p>
  <button on:click={prev}>前走者</button>
  <button on:click={next}>次走者</button>
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
