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
  import { monthSynthesis } from "./functions/monthlySymthesis";

  import {
    headersTable,
    calculateTotalsTable,
    ordersTable,
    chartsTable,
  } from "./functions/tableStoryAmountStats";

  import Table from "./components/tables/Table.svelte";
  import Histogram from "./components/Histogram.svelte";
  import Synthesis from "./components/synthesis/Synthesis.svelte";

  // const urlMedium: string = "https://medium.com/me/stats?format=json&count=100"; // stats.json
  const urlMedium: string =
    "https://medium.com/me/partner/dashboard?format=json"; // dashboard.json

  let listStories = [];
  let monthlyAmounts = [];
  let chartData = [];
  let chartLabels = [];

  $: showMonthlyAmounts = monthlyAmounts.length > 0;
  $: showListStories = listStories.length > 0;
  $: showMonthSynthesis = listStories.length > 0;

  $: chartData = [...getDataForMonthlyAmountsChart(monthlyAmounts).data];
  $: chartLabels = [...getDataForMonthlyAmountsChart(monthlyAmounts).labels];

  $: totalsTable = [...calculateTotalsTable(listStories, headersTable)];

  async function loadDashboardJSON() {
    const stats: MediumDashboard = await loadMediumJSONStats();
    monthlyAmounts = [...getMonthlyAmounts(stats)];
    listStories = [...getListStoryAmountStats(stats.payload.postAmounts)];
  }

  $: currentMonthSynthesis = monthSynthesis(listStories);
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
    }}>Load dashboard.json</button
  >

  {#if monthlyAmounts.length > 0}
    <button
      on:click={() => {
        showMonthlyAmounts = !showMonthlyAmounts;
      }}
      >{#if !showMonthlyAmounts}
        Show Monthly Amounts
      {:else}
        Hide Monthly Amounts
      {/if}</button
    >
  {/if}

  {#if listStories.length > 0}
    <button
      on:click={() => {
        showListStories = !showListStories;
      }}
      >{#if !showListStories}
        Show List Stories
      {:else}
        Hide List Stories
      {/if}</button
    >
  {/if}

  {#if listStories.length > 0}
    <button
      on:click={() => {
        showMonthSynthesis = !showMonthSynthesis;
      }}
      >{#if !showMonthSynthesis}
        Show Month Synthesis
      {:else}
        Hide Month Synthesis
      {/if}</button
    >
  {/if}
</header>

<main>
  {#if monthlyAmounts.length > 0 && showMonthlyAmounts}
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
      <div class="histogram">
        <Histogram labels={chartLabels} data={chartData} />
      </div>
    </div>
  {/if}

  {#if listStories.length > 0 && showListStories}
    <div class="list-stories" transition:slide>
      <Table
        rows={listStories}
        headers={headersTable}
        totals={totalsTable}
        orders={ordersTable}
        chartsColumns={chartsTable}
        chartColumn="title"
        chartValue="amountMonth"
      />
    </div>
  {/if}

  {#if listStories.length > 0 && showMonthSynthesis}
    <div class="synthesis" transition:slide>
      <Synthesis monthSynthesis={currentMonthSynthesis} />
    </div>
  {/if}
</main>

<footer>
  <p>
    Version: 0.0.11 - I recommend using this app on pc. It is not designed for
    smartphones.
  </p>
</footer>

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
  .histogram {
    width: 100%;
    height: 100%;
  }
  .list-stories {
    width: 100%;
    height: 80vh;
  }

  .synthesis {
    width: 40ch;
  }
</style>
