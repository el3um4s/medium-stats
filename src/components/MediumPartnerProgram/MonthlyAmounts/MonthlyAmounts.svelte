<script lang="ts">
  import { slide } from "svelte/transition";
  import type { PartnerProgram } from "../../../Interfaces/MediumPartnerProgram";

  import { getMonthlyAmounts } from "./MonthlyAmounts";
  import { earningPerMonth } from "./MonthlyAmountsCharts";
  import { getListStoryAmountStats } from "../../../functions/storyAmountStats";
  import { writingDay } from "../CurrentMonthSynthesis/SynthesisCharts";

  import GoogleChartColumn from "../../GoogleCharts/GoogleChartColumn.svelte";
  import GoogleChartCalendar from "../../GoogleCharts/GoogleChartCalendar.svelte";

  export let mediumPartnerProgram: PartnerProgram;

  $: monthlyAmounts = getMonthlyAmounts(mediumPartnerProgram);
  $: monthlyEarning = earningPerMonth(monthlyAmounts);

  $: listStories = getListStoryAmountStats(mediumPartnerProgram);
  $: dayWithWords = writingDay(listStories);
</script>

<section transition:slide>
  <div class="list">
    <ul>
      {#each monthlyAmounts as data (data.month)}
        <li>
          {data.month.monthName}
          {data.month.year} - {data.amount / 100} $
        </li>
      {/each}
    </ul>
  </div>

  <div class="monthlyEarning">
    <GoogleChartColumn
      title="Monthly Earnings"
      data={monthlyEarning}
      column={["Month", "$"]}
      colors={["#ea580c"]}
    />
  </div>

  <div class="dayWithWords">
    <GoogleChartCalendar
      cols={dayWithWords.cols}
      rows={dayWithWords.rows}
      title="Words Per Day"
      colorAxis={["#38bdf8", "#075985"]}
    />
  </div>
</section>

<style lang="postcss">
  section {
    display: grid;
    grid-template-columns: 280px 320px 320px 160px;
    grid-template-rows: auto auto;
    gap: 0px 0px;
    grid-template-areas:
      "list monthlyEarning monthlyEarning other"
      "dayWithWords dayWithWords dayWithWords dayWithWords";
  }

  .list {
    grid-area: list;
    overflow-y: auto;
  }

  .monthlyEarning {
    grid-area: monthlyEarning;
    width: 600px;
  }

  .dayWithWords {
    grid-area: dayWithWords;
    overflow-y: hidden;
    overflow-x: auto;
  }
</style>
