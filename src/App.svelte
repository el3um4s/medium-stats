<script lang="ts">
  import { slide } from "svelte/transition";

  import "./css/tailwind.pcss";

  import type { MediumDashboard } from "./functions/mediumDashboard";
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

  import Table from "./components/tables/Table.svelte";
  import MonthlyAmounts from "./components/monthlyAmounts/MonthlyAmounts.svelte";

  import CurrentMonthSynthesis from "./components/synthesis/CurrentMonthSynthesis.svelte";

  // const urlMedium: string = "https://medium.com/me/stats?format=json&count=100"; // stats.json
  const urlMedium: string =
    "https://medium.com/me/partner/dashboard?format=json"; // dashboard.json

  let listStories = [];
  let monthlyAmounts = [];
  let chartData = [];
  let chartLabels = [];

  $: chartData = [...getDataForMonthlyAmountsChart(monthlyAmounts).data];
  $: chartLabels = [...getDataForMonthlyAmountsChart(monthlyAmounts).labels];

  $: totalsTable = [...calculateTotalsTable(listStories, headersTable)];

  async function loadDashboardJSON() {
    const stats: MediumDashboard = await loadMediumJSONStats();
    monthlyAmounts = [...getMonthlyAmounts(stats)];
    listStories = [...getListStoryAmountStats(stats.payload.postAmounts)];
  }

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

<header>
  <button
    on:click={() => {
      window.open(urlMedium, "medium stats");
    }}>Save dashboard.json</button
  >

  <button
    on:click={async () => {
      await loadDashboardJSON();
      componentName = "CurrentMonthSynthesis";
      component = CurrentMonthSynthesis;
    }}>Load dashboard.json</button
  >

  {#if monthlyAmounts.length > 0}
    <button
      on:click={() => {
        componentName = "MonthlyAmounts";
        component = MonthlyAmounts;
      }}
    >
      Monthly Amounts
    </button>
  {/if}

  {#if listStories.length > 0}
    <button
      on:click={() => {
        componentName = "Table";
        component = Table;
      }}
    >
      List Stories
    </button>
  {/if}

  {#if listStories.length > 0}
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
    Version: 0.0.13 - I recommend using this app on pc. It is not designed for
    smartphones.
  </p>
</footer>

<style lang="postcss">
</style>
