<script lang="ts">
  import "@google-web-components/google-chart";

  export let cols = [];
  export let rows = [];
  export let title = "";
</script>

<div>
  <google-chart
    id="selection-chart"
    type="pie"
    {cols}
    {rows}
    options={{
      title: title,
      backgroundColor: "transparent",
    }}
  />
</div>

<style lang="postcss">
  google-chart {
    width: 100%;
    height: 480px;
  }
</style>
