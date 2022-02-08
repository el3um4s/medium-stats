<script lang="ts">
  import { slide } from "svelte/transition";
  import Table from "../../Tables/Table.svelte";
  import { partnerProgram } from "../../../stores/PartnerProgram/StorePartnerProgram";

  import {
    headersTable,
    calculateTotalsTable,
    ordersTable,
    chartsTable,
  } from "./listStories";
  import App from "../../../App.svelte";

  let chartColumn = "title";
  let chartValue = "amountMonth";

  $: listStories = partnerProgram.getListStories();

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
