<script lang="ts">
  import { slide } from "svelte/transition";
  import type { PartnerProgram } from "../../../Interfaces/MediumPartnerProgram";

  import { getMonthlyAmounts } from "./MonthlyAmounts";
  import {
    earningPerMonth,
    earningPerStory,
    treemapWordsAndEarning,
  } from "./MonthlyAmountsCharts";
  import { getListStoryAmountStats } from "../../../functions/storyAmountStats";
  import { writingDay } from "../CurrentMonthSynthesis/SynthesisCharts";

  import GoogleChartColumn from "../../GoogleCharts/GoogleChartColumn.svelte";
  import GoogleChartCalendar from "../../GoogleCharts/GoogleChartCalendar.svelte";
  import GoogleChartPie from "../../GoogleCharts/GoogleChartPie.svelte";
  import GoogleChartTreemap from "../../GoogleCharts/GoogleChartTreemap.svelte";

  export let mediumPartnerProgram: PartnerProgram;

  $: monthlyAmounts = getMonthlyAmounts(mediumPartnerProgram);
  $: monthlyEarning = earningPerMonth(monthlyAmounts);

  $: listStories = getListStoryAmountStats(mediumPartnerProgram);
  $: dayWithWords = writingDay(listStories);
  $: storyEarning = earningPerStory(listStories);
  $: treemapWords = treemapWordsAndEarning(listStories);
</script>

<section transition:slide>
  <div class="list">
    <table transition:slide>
      <thead>
        <tr>
          <th class="label">Period</th>
          <th class="value">Earnings</th>
        </tr>
      </thead>
      <tbody>
        {#each monthlyAmounts as data (data.month)}
          <tr>
            <td class="label">{data.month.monthName} {data.month.year}</td>
            <td class="value">{data.amount / 100} $</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>

  <div class="monthlyEarning" transition:slide>
    <GoogleChartColumn
      title="Monthly Earnings"
      data={monthlyEarning}
      column={["Month", "$"]}
      colors={["#ea580c"]}
    />
  </div>

  <div class="storyEarning" transition:slide>
    <GoogleChartPie
      cols={storyEarning.cols}
      rows={storyEarning.rows}
      title="Earning Per Story"
      sliceVisibilityThreshold={5 / 100}
    />
  </div>

  <div class="dayWithWords" transition:slide>
    <GoogleChartCalendar
      cols={dayWithWords.cols}
      rows={dayWithWords.rows}
      title="Words Per Day"
      colorAxis={["#fdba74", "#9a3412"]}
    />
  </div>

  <div class="treemapWords">
    <GoogleChartTreemap
      data={treemapWords}
      title="Words And Earning Per Story"
      maxPostDepth={3}
      minColor="#fed7aa"
      midColor="#f97316"
      maxColor="#9a3412"
    />
  </div>
</section>

<style lang="postcss">
  section {
    display: grid;
    grid-template-columns: 400px 400px 400px;
    grid-template-rows: 300px 300px auto;
    gap: 4px 4px;
    grid-template-areas:
      "monthlyEarning storyEarning list"
      "treemapWords other list"
      "dayWithWords dayWithWords dayWithWords";
  }

  .list {
    grid-area: list;
    max-height: 600px;
    overflow: hidden;
  }

  .monthlyEarning {
    grid-area: monthlyEarning;
  }

  .storyEarning {
    grid-area: storyEarning;
  }
  .dayWithWords {
    grid-area: dayWithWords;
    overflow-y: hidden;
    overflow-x: auto;
  }

  table {
    @apply mt-2 ml-1 mr-1 mb-1 table-auto border-collapse;
    width: calc(100% - 0.75rem);
  }

  tbody {
    @apply block overflow-y-scroll overflow-x-hidden w-full;
    max-height: 540px;
  }

  tr {
    @apply p-1 border-slate-400 border-b border-dotted;
  }

  thead tr {
    @apply border-b border-solid border-slate-600;
  }

  tbody tr:hover {
    @apply bg-orange-200;
  }

  .label {
    @apply text-left;
  }

  .value {
    @apply text-right;
  }

  tr {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  tbody::-webkit-scrollbar {
    width: 8px;
  }

  tbody::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(246, 107, 33, 0.5);
    border-radius: 10px;
  }

  tbody::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(234, 88, 12, 0.8);
  }
</style>
