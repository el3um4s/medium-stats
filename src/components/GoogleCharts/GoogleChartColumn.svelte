<script type="ts">
  //   https://github.com/GoogleWebComponents/google-chart
  import "@google-web-components/google-chart";

  export let data: (String[] | (string | number)[])[] = [];
  export let title: String = "";
  export let colors: String[] = [];

  $: options = {
    title,
    legend: "none",
    backgroundColor: "transparent",
    colors: colors.length > 0 ? colors : undefined,
    titleTextStyle: { fontSize: 14, color: "#737373" },
  };
</script>

<google-chart {data} options={{ ...options }} />
