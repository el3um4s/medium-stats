<script lang="ts">
  import { slide } from "svelte/transition";

  import "./css/tailwind.pcss";

  import type { MediumDashboard } from "./Interfaces/MediumPartnerProgram";

  import { loadMediumJSONStats } from "./functions/utilityJSON";
  import {
    getMonthlyAmounts,
    getDataForMonthlyAmountsChart,
  } from "./functions/monthlyAmountsStats";
  import { getListStoryAmountStats } from "./functions/storyAmountStats";
  import {
    monthSynthesis,
    earningForMonthPub,
  } from "./functions/monthlySymthesis";

  import {
    headersTable,
    calculateTotalsTable,
    ordersTable,
    chartsTable,
  } from "./functions/tableStoryAmountStats";

  import Table from "./Components/Tables/Table.svelte";
  import MonthlyAmounts from "./Components/MediumPartnerProgram/MonthlyAmounts/MonthlyAmounts.svelte";

  import CurrentMonthSynthesis from "./Components/MediumPartnerProgram/CurrentMonthSynthesis/CurrentMonthSynthesis.svelte";

  // const urlMedium: string = "https://medium.com/me/stats?format=json&count=100"; // stats.json
  const urlMedium: string =
    "https://medium.com/me/partner/dashboard?format=json"; // dashboard.json

  let chartData = [];
  let chartLabels = [];

  let mediumPartnerProgram: MediumDashboard;

  $: chartData = [...getDataForMonthlyAmountsChart(monthlyAmounts).data];
  $: chartLabels = [...getDataForMonthlyAmountsChart(monthlyAmounts).labels];

  $: totalsTable = [...calculateTotalsTable(listStories, headersTable)];

  $: monthlyAmounts = mediumPartnerProgram
    ? getMonthlyAmounts(mediumPartnerProgram)
    : [];
  $: listStories = mediumPartnerProgram
    ? getListStoryAmountStats(mediumPartnerProgram.payload.postAmounts)
    : [];
  $: currentMonthSynthesis = monthSynthesis(listStories);
  $: earningForMonthPublished = earningForMonthPub(listStories);

  let componentName: string;
  let component;
  let componentProps = {};

  $: componentProps = setProps(componentName);

  function setProps(name: String) {
    if (name === "MonthlyAmounts") {
      return {
        monthlyAmounts,
        chartLabels,
        chartData,
      };
    }

    if (name === "Table") {
      return {
        rows: listStories,
        headers: headersTable,
        totals: totalsTable,
        orders: ordersTable,
        chartsColumns: chartsTable,
        chartColumn: "title",
        chartValue: "amountMonth",
      };
    }

    if (name === "CurrentMonthSynthesis") {
      return {
        cols: earningForMonthPublished.cols,
        rows: earningForMonthPublished.rows,
        currentMonthSynthesis,
      };
    }
  }
</script>

<svelte:head>
  <title>Medium Stats</title>
</svelte:head>

<header>
  <button
    on:click={() => {
      window.open(urlMedium, "medium stats");
    }}>Save dashboard.json</button
  >

  <button
    on:click={async () => {
      componentName = "";
      component = null;
      mediumPartnerProgram = await loadMediumJSONStats();
      componentName = "CurrentMonthSynthesis";
      component = CurrentMonthSynthesis;
    }}>Load dashboard.json</button
  >

  {#if mediumPartnerProgram}
    <button
      on:click={() => {
        componentName = "MonthlyAmounts";
        component = MonthlyAmounts;
      }}
    >
      Monthly Amounts
    </button>

    <button
      on:click={() => {
        componentName = "Table";
        component = Table;
      }}
    >
      List Stories
    </button>

    <button
      on:click={() => {
        componentName = "CurrentMonthSynthesis";
        component = CurrentMonthSynthesis;
      }}
    >
      Month Synthesis
    </button>
  {/if}
</header>

<main>
  <svelte:component this={component} {...componentProps} />
</main>

<footer>
  <p>
    Version: 0.0.15 - I recommend using this app on pc. It is not designed for
    smartphones.
  </p>
</footer>

<style lang="postcss">
</style>
