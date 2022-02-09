<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import "@google-web-components/google-chart";

  const dispatch = createEventDispatcher();

  export let cols: {
    label: string;
    type: string;
  }[] = [];
  export let rows = [];
  export let title: String = "";
  export let sliceVisibilityThreshold: number = 0;
</script>

<google-chart
  type="pie"
  {cols}
  {rows}
  options={{
    title,
    backgroundColor: "transparent",
    titleTextStyle: { fontSize: 14, color: "#737373" },
    sliceVisibilityThreshold,
  }}
  on:google-chart-select={(e) => {
    const selection = e.detail.chart.getSelection();
    dispatch("select", {
      selection,
      event: selection.length > 0 ? "select" : "unselect",
      row: selection[0]?.row,
      value: rows[selection[0]?.row],
    });
  }}
/>
