<script lang="ts">
  import { slide } from "svelte/transition";
  import GoogleChartColumn from "../../GoogleCharts/GoogleChartColumn.svelte";
  import type { MediumPartnerProgram } from "../../../Interfaces/MediumPartnerProgram";

  import {
    getMonthlyAmounts,
    getDataForMonthlyAmountsChart,
  } from "./monthlyAmounts";

  export let mediumPartnerProgram: MediumPartnerProgram;

  $: monthlyAmounts = getMonthlyAmounts(mediumPartnerProgram);
  $: chartData = [...getDataForMonthlyAmountsChart(monthlyAmounts).data];
  $: chartLabels = [...getDataForMonthlyAmountsChart(monthlyAmounts).labels];

  $: data = chartLabels.map((label, index) => [label, chartData[index] / 100]);
</script>

<div class="monthly-amounts" transition:slide>
  <div class="monthly-list">
    <ul>
      {#each monthlyAmounts as data (data.month)}
        <li>
          {data.month.monthName}
          {data.month.year} - {data.amount / 100} $
        </li>
      {/each}
    </ul>
  </div>

  <GoogleChartColumn
    title="Monthly Earnings"
    {data}
    column={["Month", "$"]}
    colors={["#ea580c"]}
  />
</div>

<style lang="postcss">
  .monthly-amounts {
    overflow: hidden;
    display: grid;
    grid-template-columns: auto 1fr;
  }

  .monthly-list {
    width: 20ch;
    height: 300px;
    overflow-y: auto;
  }
</style>
