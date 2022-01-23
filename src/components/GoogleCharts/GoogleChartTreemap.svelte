<script lang="ts">
  import "@google-web-components/google-chart";

  export let data: [String, String | null, Number | String, Number | String][] =
    [];
  export let title: String = "";
  export let maxDepth: Number = 1;
  export let maxPostDepth: Number = 0;
  export let minColor: String = "#dd0000";
  export let midColor: String = "#000000";
  export let maxColor: String = "#00dd00";
</script>

<google-chart
  type="treemap"
  {data}
  options={{
    title,
    backgroundColor: "transparent",
    titleTextStyle: { fontSize: 14, color: "#737373" },
    maxDepth,
    maxPostDepth,
    minColor,
    midColor,
    maxColor,
  }}
/>
