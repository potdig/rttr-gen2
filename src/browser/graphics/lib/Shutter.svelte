<script lang="ts">
  import { isSettingUp } from '~/browser/store/runner'
  import type { Group } from '~/types/group'

  export let mirrorId: Group
  $: setup = isSettingUp(mirrorId)
  $: shutterClass = $setup ? 'setup' : ''
</script>

<div id="shutter" class={shutterClass}>Setting up...</div>

<style lang="scss">
  @import 'stylesheet/common.scss';

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
    color: rgba($color: white, $alpha: 0.5);
    background: $blackBackground;
    font-size: 2em;
    font-family: 'Fira Sans Condensed', sans-serif;
    transition: top 1s cubic-bezier(0.33, 1, 0.68, 1);

    &.setup {
      top: 0;
    }
  }
</style>
