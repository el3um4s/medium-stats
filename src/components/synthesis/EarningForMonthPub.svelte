<script lang="ts">
  import "@google-web-components/google-chart";

  export let cols = [];
  export let rows = [];
</script>

<div>
  <google-chart
    id="selection-chart"
    type="pie"
    {cols}
    {rows}
    options={{
      title: "Earnings per month of publication",
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
