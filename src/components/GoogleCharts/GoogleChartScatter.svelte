<script lang="ts">
  import "@google-web-components/google-chart";

  export let data: [
    Number | String,
    Number | String,
    String | { type: String; role: String }
  ][] = [];
  export let title: String = "";

  export let axisY: String = data[0][0].toString();
  export let axisX: String = data[0][1].toString();
  export let colors: String[] = [];
</script>

<google-chart
  type="scatter"
  {data}
  options={{
    title,
    backgroundColor: "transparent",
    titleTextStyle: { fontSize: 14, color: "#737373" },
    legend: "none",
    hAxis: { title: axisY },
    vAxis: { title: axisX },
    colors: colors.length > 0 ? colors : undefined,
    tooltip: { isHtml: true },
  }}
/>
