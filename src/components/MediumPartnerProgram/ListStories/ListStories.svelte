<script lang="ts">
  import Table from "../../Tables/Table.svelte";
  import type { PartnerProgram } from "../../../Interfaces/MediumPartnerProgram";
  import { getListStoryAmountStats } from "../../../functions/storyAmountStats";

  import {
    headersTable,
    calculateTotalsTable,
    ordersTable,
    chartsTable,
  } from "./listStories";

  export let mediumPartnerProgram: PartnerProgram;

  let chartColumn = "title";
  let chartValue = "amountMonth";

  $: listStories = getListStoryAmountStats(mediumPartnerProgram);

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

<Table {...props} />

<style lang="postcss"></style>
