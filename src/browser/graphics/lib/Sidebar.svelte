<script lang="ts">
  import { currentCommentators } from '~/browser/store/commentator'
  import { currentRunner } from '~/browser/store/runner'
  import type { Group } from '~/types/group'
  import Shutter from './Shutter.svelte'
  import { colorFor } from './common-color'

  const commentatorIconPathPrefix = '/assets/rttr-gen2/commentator-icons/'

  export let mirrorId: Group
  $: runner = currentRunner(mirrorId)
  $: commentators = currentCommentators
  $: runnerIconPath = `/assets/rttr-gen2/runner-icons/${$runner?.icon}`
</script>

<div id="side">
  <p id="logo">
    <img
      id="rttr-logo"
      src="/assets/rttr-gen2/materials/rttr_logo.png"
      alt="Logo of RttR"
    />
    <span>in</span>
    <img
      id="place-logo"
      src="/assets/rttr-gen2/materials/place_logo.png"
      alt="Logo of place"
    />
  </p>
  <div id="info" style="border-color: {colorFor(mirrorId)}">
    <Shutter {mirrorId} />
    <div id="value">
      <div id="runner">
        <div id="mirror-id">
          <span>{mirrorId}</span>
        </div>
        <img id="icon" src={runnerIconPath} alt="icon" />
        <p id="name">{$runner?.name}</p>
      </div>
      <div id="description">
        <p class="label">ゲーム名</p>
        <p class="value">{$runner?.gameTitle}</p>
        <p class="label">カテゴリ</p>
        <p class="value">{$runner?.category}</p>
        <p class="label">使用ハード</p>
        <p class="value">{$runner?.console}</p>
        <p class="label">PBタイム</p>
        <p class="value">{$runner?.personalBest}</p>
        <p class="label">目標タイム</p>
        <p class="value">{$runner?.targetTime}</p>
        <p class="label">Twitter</p>
        <p class="value">{$runner?.twitter}</p>
        <p class="label">配信先</p>
        <p class="value">{$runner?.streamText}</p>
      </div>
    </div>
  </div>
  <div id="camera" />
  <div id="commentators">
    <p class="label">MC・解説</p>
    <div id="icon-names">
      {#each $commentators as commentator}
        <img src={commentatorIconPathPrefix + commentator.icon} alt="icon" />
        <p>{commentator.name}</p>
      {/each}
    </div>
  </div>
</div>

<style lang="scss" scoped>
  @import 'stylesheet/common.scss';

  $backgroundForLabel: rgba(
    $color: white,
    $alpha: 0.6,
  );
  $backgroundForValue: rgba(
    $color: white,
    $alpha: 0.3,
  );
  $runnerHeight: 60px;

  #side {
    display: grid;
    grid-template-rows: repeat(3, max-content) 1fr;
    place-items: center;
    width: $sidebarWidth;
    height: $viewHeight;
    box-sizing: border-box;
  }

  #logo {
    display: grid;
    grid-template-columns: 1fr max-content max-content;
    align-items: center;
    gap: 0.4em;
    margin-block: 12px;
    font-size: 2.4em;
    font-family: 'Fira Sans Condensed', sans-serif;

    #rttr-logo {
      width: 100%;
    }

    #place-logo {
      width: 160px;
      padding-right: 10px;
    }
  }

  #info {
    border: $border;
    border-right: 0px;
    width: calc(100% - $borderSize);
    position: relative;
    overflow: hidden;

    #value {
      position: relative;
      width: 100%;
      top: 0;
      left: 0;
    }
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
  }

  #description {
    display: grid;
    grid-template-columns: max-content 1fr;
    font-size: 1.5em;
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

    #icon-names {
      display: grid;
      grid-template-rows: 80px max-content;
      grid-template-columns: max-content;
      justify-content: start;
      gap: 0.1em 1em;
      grid-auto-flow: column;
      font-size: 1.2em;
      margin-top: 1em;
      margin-left: 0.5em;

      img {
        height: 100%;
        margin: auto;
      }

      p {
        text-align: center;
      }
    }
  }
</style>
