<script lang="ts">
  import { slide } from "svelte/transition";
  import type { PartnerProgram } from "../../../Interfaces/MediumPartnerProgram";
  import { getListStoryAmountStats } from "../../../functions/storyAmountStats";
  import { earningForMonthPub, earningForMonthStory } from "./SynthesisCharts";

  import Synthesis from "./Synthesis.svelte";
  import GoogleChartPie from "../../GoogleCharts/GoogleChartPie.svelte";

  export let mediumPartnerProgram: PartnerProgram;

  $: listStories = getListStoryAmountStats(mediumPartnerProgram);
  $: earningForMonthPublished = earningForMonthPub(listStories);
  $: earningForStoryPublished = earningForMonthStory(listStories);
</script>

<section class="syntPlusMonthPubs" transition:slide>
  <Synthesis {mediumPartnerProgram} />

  <div class="charts">
    <GoogleChartPie
      cols={earningForMonthPublished.cols}
      rows={earningForMonthPublished.rows}
      title="Earning Per Month of Publication"
    />
    <GoogleChartPie
      cols={earningForStoryPublished.cols}
      rows={earningForStoryPublished.rows}
      title="Earning Per Story"
    />
  </div>
</section>

<style lang="postcss">
  section {
    width: 100%;
    display: grid;
    grid-template-columns: 40ch auto;
    align-items: start;
  }

  .charts {
    display: grid;
    gap: 1rem;
    align-items: flex-start;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  }
</style>
