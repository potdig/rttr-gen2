<script lang="ts">
  import { colorFor } from './common-color'

  export let mirrorId: string
</script>

<div id="side">
  <div id="logo">
    <img id="rttr-logo" src="/rttr_logo.png" alt="Logo of RttR" />
    <p id="rb">
      Powered by <img id="rb-logo" src="/rb_logo.png" alt="Logo of RttR" />
    </p>
  </div>
  <div id="info" style="border-color: {colorFor(mirrorId)}">
    <div id="runner">
      <div id="mirror-id">
        <span>{mirrorId}</span>
      </div>
      <img id="icon" src="/vite.svg" alt="icon" />
      <p id="name">あらし</p>
      <p id="timer">0:12:34</p>
    </div>
    <div id="description">
      <p class="label">ゲーム名</p>
      <p class="value">Racing Pitch</p>
      <p class="label">カテゴリ</p>
      <p class="value">Any%</p>
      <p class="label">使用ハード</p>
      <p class="value">PC</p>
      <p class="label">PBタイム</p>
      <p class="value">0:10:06.800</p>
      <p class="label">目標タイム</p>
      <p class="value">0:09:XX</p>
      <p class="label">Twitter</p>
      <p class="value">@Imhakoniwa27M11</p>
      <p class="label">配信先</p>
      <p class="value">https://www.twitch.tv/sheephitsuji</p>
    </div>
  </div>
  <div id="camera" />
  <div id="commentators">
    <p class="label">MC・解説</p>
  </div>
</div>

<style lang="scss" scoped>
  @import 'stylesheet/common.scss';

  $sidebarWidth: $viewWidth * 0.3;
  $backgroundForLabel: rgba(
    $color: white,
    $alpha: 0.6,
  );
  $backgroundForValue: rgba(
    $color: white,
    $alpha: 0.3,
  );
  $runnerHeight: 50px;

  #side {
    display: grid;
    grid-template-rows: repeat(3, max-content) 1fr;
    place-items: center;
    width: $sidebarWidth;
    height: $viewHeight;
    box-sizing: border-box;
  }

  #logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 12px;

    #rttr-logo {
      width: 100%;
    }

    #rb {
      font-size: 2.4em;
      font-family: 'Fira Sans Condensed', sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;

      #rb-logo {
        width: 30%;
        margin-left: 0.5em;
      }
    }
  }

  #info {
    border: $border;
    border-right: 0px;
    width: calc(100% - $borderSize);
  }

  #runner {
    display: grid;
    grid-template-columns: $runnerHeight $runnerHeight 1fr max-content;
    width: 100%;
    align-items: center;
    font-size: $runnerHeight - 20px;

    & > * {
      background-color: $backgroundForValue;
      height: $runnerHeight;
    }

    #mirror-id {
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: 'Fira Sans Condensed', sans-serif;
      font-size: 1.4em;
      line-height: $runnerHeight;
      background-color: $backgroundForLabel;
    }

    #name {
      padding-left: 0.2em;
    }

    #timer {
      font-family: 'Fira Code', monospace;
      margin-left: auto;
      font-size: $runnerHeight - 12px;
    }
  }

  #description {
    display: grid;
    grid-template-columns: max-content 1fr;
    font-size: 1.4em;
    line-height: 1.2em;

    .label {
      font-weight: bold;
      background-color: $backgroundForLabel;
      padding: 0.2em 0.6em 0.2em 0.2em;
    }

    .value {
      padding: 0.2em;
      background-color: $backgroundForValue;
    }
  }

  #camera {
    width: 100%;
    height: calc($sidebarWidth / 16 * 9);
    background-color: rgba($color: black, $alpha: 0.2);
  }

  #commentators {
    border: $border whitesmoke;
    border-right: 0px;
    width: calc(100% - $borderSize);
    height: calc(100% - $borderSize * 2);
    background-color: $backgroundForValue;

    .label {
      font-size: 1.4em;
      width: max-content;
      font-weight: bold;
      background-color: $backgroundForLabel;
      padding: 0.2em 0.4em;
    }
  }
</style>
