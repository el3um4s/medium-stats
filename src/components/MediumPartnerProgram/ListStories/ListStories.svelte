<script lang="ts">
  import { slide } from "svelte/transition";
  import Table from "../../Tables/Table.svelte";
  import { partnerProgram } from "../../../stores/StorePartnerProgram";
  import { getListStoryAmountStats } from "../../../functions/storyAmountStats";

  import {
    headersTable,
    calculateTotalsTable,
    ordersTable,
    chartsTable,
  } from "./listStories";

  let chartColumn = "title";
  let chartValue = "amountMonth";

  $: listStories = getListStoryAmountStats($partnerProgram);

  $: totalsTable = [...calculateTotalsTable(listStories, headersTable)];

  $: props = {
    rows: listStories,
    headers: headersTable,
    totals: totalsTable,
    orders: ordersTable,
    chartsColumns: chartsTable,
    chartColumn,
    chartValue,
  };
</script>

<section transition:slide>
  <Table {...props} />
</section>

<style lang="postcss">
  section {
    height: 100%;
  }
</style>
