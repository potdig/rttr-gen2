<script lang="ts">
  import { setupText } from '../store/setup-text'
</script>

<img id="catch" src="/assets/rttr-gen2/materials/catch.png" alt="catch" />
<img id="logo" src="/assets/rttr-gen2/materials/logo_A1.png" alt="logo" />
<div id="border" />
<p>{$setupText}</p>

<style lang="scss">
  $textColor: rgb(41, 41, 41);

  #catch {
    width: 65%;
  }

  #logo {
    position: relative;
    top: -32px;
    width: 97%;
  }

  #border {
    border: 3px solid $textColor;
    width: 100%;
  }

  p {
    color: $textColor;
    font-size: 112px;
    width: fit-content;
    margin: 0;
  }
</style>
