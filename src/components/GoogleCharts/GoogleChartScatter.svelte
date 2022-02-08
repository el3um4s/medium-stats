<script lang="ts">
  // https://github.com/simeydotme/svelte-range-slider-pips
  import RangeSlider from "svelte-range-slider-pips";
  import "@google-web-components/google-chart";

  export let data: [
    Number | String,
    Number | String,
    String | { type: String; role: String }
  ][] = [];
  export let title: String = "";

  export let axisX: String = data[0][0].toString();
  export let axisY: String = data[0][1].toString();
  export let colors: String[] = [];

  const dataRange = {
    hAxis: {
      min: 0,
      max: Math.floor(
        Math.max(
          ...data.map((d, i) =>
            i > 0 && typeof d[0] == "number" ? d[0] : null
          )
        ) * 1.1
      ),
    },
    vAxis: {
      min: 0,
      max: Math.floor(
        Math.max(
          ...data.map((d, i) =>
            i > 0 && typeof d[1] == "number" ? d[1] : null
          )
        ) * 1.1
      ),
    },
  };
  let hRange = [dataRange.hAxis.min, dataRange.hAxis.max];
  let vRange = [dataRange.vAxis.min, dataRange.vAxis.max];

  $: hAxis = {
    title: axisX,
    viewWindow: { min: hRange[0], max: hRange[1] },
  };

  $: vAxis = {
    title: axisY,
    viewWindow: { min: vRange[0], max: vRange[1] },
  };
</script>

<section>
  <div class="vertical">
    <RangeSlider
      vertical
      bind:values={vRange}
      min={dataRange.vAxis.min}
      max={dataRange.vAxis.max}
      range
      float
    />
  </div>

  <google-chart
    class="chart"
    type="scatter"
    {data}
    options={{
      title,
      backgroundColor: "transparent",
      titleTextStyle: { fontSize: 14, color: "#737373" },
      legend: "none",
      hAxis,
      vAxis,
      colors: colors.length > 0 ? colors : undefined,
      tooltip: { isHtml: true },
    }}
  />
  <div class="horizontal">
    <RangeSlider
      bind:values={hRange}
      min={dataRange.hAxis.min}
      max={dataRange.hAxis.max}
      range
      float
    />
  </div>
</section>

<style>
  section {
    display: grid;
    grid-template-columns: 20px 320px;
    grid-template-rows: 20px 320px;
    grid-template-areas:
      "none horizontal"
      "vertical chart";
  }

  .horizontal {
    grid-area: horizontal;
  }

  .vertical {
    grid-area: vertical;
  }

  .chart {
    grid-area: chart;
  }

  google-chart {
    width: 350px;
    height: 280px;
  }
</style>
