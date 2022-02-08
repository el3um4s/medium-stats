<script lang="ts">
  import { partnerProgram } from "./stores/PartnerProgram/StorePartnerProgram";

  import "./css/tailwind.pcss";

  import { loadMediumJSONStats } from "./functions/utilityJSON";

  import ListStories from "./components/MediumPartnerProgram/ListStories/ListStories.svelte";
  import MonthlyAmounts from "./components/MediumPartnerProgram/MonthlyAmounts/MonthlyAmounts.svelte";

  import CurrentMonthSynthesis from "./components/MediumPartnerProgram/CurrentMonthSynthesis/CurrentMonthSynthesis.svelte";

  // const urlMedium: string = "https://medium.com/me/stats?format=json&count=100"; // stats.json
  const urlMediumPartnerProgram: string =
    "https://medium.com/me/partner/dashboard?format=json"; // dashboard.json

  let component;
</script>

<svelte:head>
  <title>Medium Stats</title>
</svelte:head>

<header>
  <button
    on:click={() => {
      window.open(urlMediumPartnerProgram, "medium stats");
    }}>Save dashboard.json</button
  >

  <button
    on:click={async () => {
      component = null;
      partnerProgram.set(await loadMediumJSONStats());
      component = CurrentMonthSynthesis;
    }}>Load dashboard.json</button
  >

  {#if $partnerProgram}
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
  <svelte:component this={component} />
</main>

<footer>
  <p>
    Version: 0.0.32 - I recommend using this app on pc. It is not designed for
    smartphones.
  </p>
</footer>

<style lang="postcss">
</style>
