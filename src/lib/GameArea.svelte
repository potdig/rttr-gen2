<script>
  import MainVideo from './MainVideo.svelte'
  import SubVideo from './SubVideo.svelte'

  const mirrorIds = ['A', 'B', 'C', 'D']

  export let mirrorId
  $: subMirrorIds = mirrorIds.filter(id => id !== mirrorId)
</script>

<div id="game-area">
  <MainVideo {mirrorId} />
  {#each subMirrorIds as subMirrorId}
    <SubVideo mirrorId={subMirrorId} />
  {/each}
</div>

<style lang="scss" scoped>
  #game-area {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: max-content 1fr;
    width: 100%;
  }
</style>
