<script lang="ts">
  const setupTexts = ['Please wait...', 'Thank you for watching!!']
  let selectedText: string

  function updateSetupText() {
    window.nodecg.sendMessage('updateSetupText', selectedText)
  }
</script>

<div>
  <p>セットアップ画面文言</p>
  <select bind:value={selectedText} on:change={updateSetupText}>
    {#each setupTexts as text}
      <option value={text}>{text}</option>
    {/each}
  </select>
</div>

<style>
  p {
    font-size: 1.6em;
    font-weight: bold;
  }
</style>
