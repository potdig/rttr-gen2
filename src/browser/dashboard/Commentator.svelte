<script lang="ts">
  import type { Commentator } from '~/types/commentator'
  import {
    currentCommentators,
    mcs,
    updateCurrentMC,
  } from '../store/commentator'

  let currentMCs: Array<string>

  function applyCurrentMCs() {
    updateCurrentMC(currentMCs)
  }

  function iconPathFor(commentator: Commentator) {
    return `/assets/rttr-gen2/commentator-icons/${commentator.icon}`
  }
</script>

<div>
  <select multiple bind:value={currentMCs}>
    {#each $mcs as mc}<option value={mc.name}>{mc.name}</option>{/each}
  </select>
  <button on:click={applyCurrentMCs}>MC変更</button>
  {#each $currentCommentators as commentator}
    <p><img src={iconPathFor(commentator)} alt="icon" /> {commentator.name}</p>
  {/each}
</div>
