<script lang="ts">
  const setupTexts = ['Please wait...', 'Thank you for watching!!']
  let selectedText: string

  function updateSetupText() {
    window.nodecg.sendMessage('updateSetupText', selectedText)
  }

  function startAllTimer() {
    window.nodecg.sendMessage('manipulateAllTimer', 'Start')
  }
</script>

<div>
  <p>セットアップ画面文言</p>
  <select bind:value={selectedText} on:change={updateSetupText}>
    {#each setupTexts as text}
      <option value={text}>{text}</option>
    {/each}
  </select>
  <p>その他機能</p>
  <div id="buttons">
    <button on:click={startAllTimer}>動いていないタイマーを一斉スタート</button>
  </div>
</div>

<style>
  p {
    font-size: 1.6em;
    font-weight: bold;
    margin: 0.2em 0;
  }
</style>
