<script lang="ts">
  import "./css/tailwind.pcss";

  import type { MediumDashboard } from "./functions/mediumDashboard";
  import { loadMediumJSONStats } from "./functions/utilityJSON";
  import {
    getMonthlyAmounts,
    getDataForMonthlyAmountsChart,
  } from "./functions/monthlyAmountsStats";
  import { getListStoryAmountStats } from "./functions/storyAmountStats";

  import {
    headersTable,
    calculateTotalsTable,
  } from "./functions/tableStoryAmountStats";

  import Table from "./components/tables/Table.svelte";
  import Histogram from "./components/Histogram.svelte";

  // const urlMedium: string = "https://medium.com/me/stats?format=json&count=100"; // stats.json
  const urlMedium: string =
    "https://medium.com/me/partner/dashboard?format=json"; // dashboard.json

  let listStories = [];
  let monthlyAmounts = [];
  let chartData = [];
  let chartLabels = [];

  $: showMonthlyAmounts = monthlyAmounts.length > 0;

  $: chartData = [...getDataForMonthlyAmountsChart(monthlyAmounts).data];
  $: chartLabels = [...getDataForMonthlyAmountsChart(monthlyAmounts).labels];

  $: totalsTable = [...calculateTotalsTable(listStories, headersTable)];

  async function loadDashboardJSON() {
    const stats: MediumDashboard = await loadMediumJSONStats();
    monthlyAmounts = [...getMonthlyAmounts(stats)];
    listStories = [...getListStoryAmountStats(stats.payload.postAmounts)];
  }
</script>

<main>
  <p>Version: 0.0.3</p>

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
    <div>
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
    </div>
  {/if}

  {#if monthlyAmounts.length > 0 && showMonthlyAmounts}
    <div class="monthly-amounts">
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
      <div class="istogram">
        <Histogram labels={chartLabels} data={chartData} />
      </div>
    </div>
  {/if}

  {#if listStories.length > 0}
    <div class="list-stories">
      <Table rows={listStories} headers={headersTable} totals={totalsTable} />
    </div>
  {/if}
</main>

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

  .istogram {
    width: 100%;
    height: 100%;
  }

  .list-stories {
    width: 100%;
    height: 400px;
  }
</style>
