<script type="ts">
  //   https://github.com/GoogleWebComponents/google-chart
  import "@google-web-components/google-chart";

  export let column: String[] = [];
  export let data = [];
  export let title: String = "";
  export let colors: String[] = [];

  $: options = {
    title,
    legend: "none",
    backgroundColor: "transparent",
    colors: colors.length > 0 ? colors : undefined,
  };
</script>

<google-chart data={[column, ...data]} options={{ ...options }} />
