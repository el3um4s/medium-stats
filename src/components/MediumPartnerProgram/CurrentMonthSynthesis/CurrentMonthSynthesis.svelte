<script lang="ts">
  import { slide } from "svelte/transition";
  import Synthesis from "./Synthesis.svelte";
  import EarningForMonthPub from "./EarningForMonthPub.svelte";

  export let currentMonthSynthesis;
  export let cols;
  export let rows;
</script>

<div class="syntPlusMonthPubs" transition:slide>
  <div class="synthesis">
    <Synthesis monthSynthesis={currentMonthSynthesis} />
  </div>
  <div class="earningForMonthPublished">
    <EarningForMonthPub
      {cols}
      {rows}
      title="Earning Per Month of Publication"
    />
  </div>
</div>

<style lang="postcss">
  .syntPlusMonthPubs {
    width: 100%;
    @apply grid;
    grid-template-columns: 40ch auto;
    align-items: center;
  }
  .synthesis {
    width: 40ch;
  }
</style>
