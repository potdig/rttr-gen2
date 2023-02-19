<script lang="ts">
  import { isSettingUp } from '~/browser/store/runner'
  import type { Group } from '~/types/group'

  export let mirrorId: Group
  $: setup = isSettingUp(mirrorId)
  $: shutterClass = $setup ? 'setup' : ''
</script>

<div id="shutter" class={shutterClass}>Setting up...</div>

<style lang="scss">
  #shutter {
    position: absolute;
    z-index: 999;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    left: 0;
    top: -100%;
    color: white;
    background-color: black;
    transition: top 1s cubic-bezier(0.33, 1, 0.68, 1);

    &.setup {
      top: 0;
    }
  }
</style>
