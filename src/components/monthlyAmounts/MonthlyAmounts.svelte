<script lang="ts">
  import { slide } from "svelte/transition";
  //   import Histogram from "./Histogram.svelte";

  //   https://github.com/GoogleWebComponents/google-chart
  import "@google-web-components/google-chart";

  export let monthlyAmounts = [];
  export let chartData = [];
  export let chartLabels = [];

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
  <!-- <div class="histogram"> -->
  <google-chart
    class="chart"
    data={[["Month", "$"], ...data]}
    options={{
      title: "Monthly Earnings",
      legend: "none",
      backgroundColor: "transparent",
      colors: ["#ea580c"],
    }}
  />
  <!-- <Histogram labels={chartLabels} data={chartData} /> -->
  <!-- </div> -->
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
  /* .histogram {
    width: 100%;
    height: 100%;
  } */

  google-chart {
    width: 100%;
    height: 100%;
  }
</style>
