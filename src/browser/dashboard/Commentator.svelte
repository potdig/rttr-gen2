<script lang="ts">
  import type { Commentator } from '~/types/commentator'
  import {
    currentCommentators,
    mcs,
    updateCurrentMC,
  } from '../store/commentator'

  let currentMCs: Array<string>

  function loadFromSpreadsheet() {
    window.nodecg.sendMessage('updateCommentator')
  }

  function applyCurrentMCs() {
    updateCurrentMC(currentMCs)
  }

  function iconPathFor(commentator: Commentator) {
    return `/assets/rttr-gen2/commentator-icons/${commentator.icon}`
  }
</script>

<div>
  <p class="subject">MC設定</p>
  <p>
    複数選択できます。解説の方は、走者の順番が来たら「現在の解説」に追加され、走者の順番が終わり次第消去されます。（下記リストには含まれません）
  </p>
  <select multiple bind:value={currentMCs}>
    {#each $mcs as mc}<option value={mc.name}>{mc.name}</option>{/each}
  </select>
  <button on:click={applyCurrentMCs}>MC変更</button>
  <p class="subject">現在の解説</p>
  {#each $currentCommentators as commentator}
    <p><img src={iconPathFor(commentator)} alt="icon" /> {commentator.name}</p>
  {/each}
  <button on:click={loadFromSpreadsheet}>解説情報を更新</button>
</div>

<style>
  img {
    width: 50px;
  }

  p {
    margin: 0.2em 0;
  }

  .subject {
    font-size: 1.6em;
    font-weight: bold;
  }
</style>
