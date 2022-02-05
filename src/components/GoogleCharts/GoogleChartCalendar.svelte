<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import "@google-web-components/google-chart";

  const dispatch = createEventDispatcher();

  export let cols: {
    id: string;
    type: string;
  }[] = [];
  export let rows: [Date, number][] = [];
  export let title: String = "";

  export let colorAxis: [String, String] = ["#f0f9ff", "#0369a1"];

  const listDates = rows
    .map((r) => r[0])
    .sort((a, b) => {
      return a.getTime() - b.getTime();
    });

  const firstYear = listDates[0]?.getFullYear();
  const lastYear = listDates[listDates.length - 1]?.getFullYear();
  const years = lastYear - firstYear + 1;
</script>

<section>
  <google-chart
    type="calendar"
    {cols}
    {rows}
    options={{
      title: title,
      backgroundColor: "transparent",
      colorAxis: { colors: colorAxis },
    }}
    style:height="{175 * years}px"
    events={["onmouseover"]}
    on:google-chart-onmouseover
    on:google-chart-select={(e) => {
      const selection = e.detail.chart.getSelection();
      dispatch("select", {
        selection,
        data: selection[selection.length - 1].date,
      });
    }}
  />
</section>

<style lang="postcss">
  section {
    height: fit-content;
  }
  google-chart {
    width: 1000px;
  }
</style>
