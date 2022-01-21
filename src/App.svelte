<script lang="ts">
  import { slide } from "svelte/transition";

  import "./css/tailwind.pcss";

  import type { MediumPartnerProgram } from "./Interfaces/MediumPartnerProgram";

  import { loadMediumJSONStats } from "./functions/utilityJSON";

  import { getListStoryAmountStats } from "./functions/storyAmountStats";
  import {
    monthSynthesis,
    earningForMonthPub,
  } from "./functions/monthlySymthesis";

  // import {
  //   headersTable,
  //   calculateTotalsTable,
  //   ordersTable,
  //   chartsTable,
  // } from "./functions/tableStoryAmountStats";

  import Table from "./components/Tables/Table.svelte";
  import ListStories from "./components/MediumPartnerProgram/ListStories/ListStories.svelte";
  import MonthlyAmounts from "./components/MediumPartnerProgram/MonthlyAmounts/MonthlyAmounts.svelte";

  import CurrentMonthSynthesis from "./components/MediumPartnerProgram/CurrentMonthSynthesis/CurrentMonthSynthesis.svelte";

  // const urlMedium: string = "https://medium.com/me/stats?format=json&count=100"; // stats.json
  const urlMedium: string =
    "https://medium.com/me/partner/dashboard?format=json"; // dashboard.json

  let mediumPartnerProgram: MediumPartnerProgram;

  // $: totalsTable = [...calculateTotalsTable(listStories, headersTable)];

  $: listStories = mediumPartnerProgram
    ? getListStoryAmountStats(mediumPartnerProgram.payload.postAmounts)
    : [];
  $: currentMonthSynthesis = monthSynthesis(listStories);
  $: earningForMonthPublished = earningForMonthPub(listStories);

  let component;
  let componentProps = {};

  $: componentProps = setProps(component);

  function setProps(componentType) {
    if (componentType == MonthlyAmounts) {
      return {
        mediumPartnerProgram,
      };
    }

    if (componentType == ListStories) {
      return {
        mediumPartnerProgram,
      };
    }

    if (componentType == CurrentMonthSynthesis) {
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
      component = null;
      mediumPartnerProgram = await loadMediumJSONStats();
      component = CurrentMonthSynthesis;
    }}>Load dashboard.json</button
  >

  {#if mediumPartnerProgram}
    <button
      on:click={() => {
        component = MonthlyAmounts;
      }}
    >
      Monthly Amounts
    </button>

    <button
      on:click={() => {
        component = ListStories;
      }}
    >
      List Stories
    </button>

    <button
      on:click={() => {
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
