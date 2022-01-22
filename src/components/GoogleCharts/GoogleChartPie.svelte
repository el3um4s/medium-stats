<script lang="ts">
  import "@google-web-components/google-chart";

  export let cols: {
    label: string;
    type: string;
  }[] = [];
  export let rows: [string, number][] = [];
  export let title: String = "";
</script>

<google-chart
  type="pie"
  {cols}
  {rows}
  options={{
    title: title,
    backgroundColor: "transparent",
  }}
/>
