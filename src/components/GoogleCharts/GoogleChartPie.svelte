<script lang="ts">
  import "@google-web-components/google-chart";

  export let cols: {
    label: string;
    type: string;
  }[] = [];
  export let rows: [string, number][] = [];
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
/>
