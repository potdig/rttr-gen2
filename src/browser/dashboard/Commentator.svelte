<script lang="ts">
  import type { Commentator } from '~/types/commentator'
  import { currentCommentators } from '../store/commentator'

  function iconPathFor(commentator: Commentator) {
    return `/assets/rttr-gen2/commentator-icons/${commentator.icon}`
  }
</script>

<div>
  {#each $currentCommentators as commentator}
    <p><img src={iconPathFor(commentator)} alt="icon" /> {commentator.name}</p>
  {/each}
</div>
