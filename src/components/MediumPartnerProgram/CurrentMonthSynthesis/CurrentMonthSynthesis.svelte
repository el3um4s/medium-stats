<script lang="ts">
  import { slide } from "svelte/transition";
  import type { MediumPartnerProgram } from "../../../Interfaces/MediumPartnerProgram";
  import { getListStoryAmountStats } from "../../../functions/storyAmountStats";
  import {
    monthSynthesis,
    earningForMonthPub,
  } from "../../../functions/monthlySynthesis";

  import Synthesis from "./Synthesis.svelte";
  import EarningForMonthPub from "./EarningForMonthPub.svelte";

  export let mediumPartnerProgram: MediumPartnerProgram;

  $: listStories = getListStoryAmountStats(
    mediumPartnerProgram.payload.postAmounts
  );

  $: currentMonthSynthesis = monthSynthesis(listStories);
  $: earningForMonthPublished = earningForMonthPub(listStories);

  $: cols = earningForMonthPublished.cols;
  $: rows = earningForMonthPublished.rows;
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
