<script lang="ts">
  import { slide } from "svelte/transition";
  import { partnerProgram } from "../../../stores/PartnerProgram/StorePartnerProgram";

  import CardStory from "../CardStory/CardStory.svelte";

  import GoogleChartColumn from "../../GoogleCharts/GoogleChartColumn.svelte";
  import GoogleChartCalendar from "../../GoogleCharts/GoogleChartCalendar.svelte";
  import GoogleChartPie from "../../GoogleCharts/GoogleChartPie.svelte";
  import GoogleChartTreemap from "../../GoogleCharts/GoogleChartTreemap.svelte";
  import GoogleChartScatter from "../../GoogleCharts/GoogleChartScatter.svelte";

  $: monthlyAmounts = partnerProgram.getMonthlyAmounts();
  $: monthlyEarning = partnerProgram.getChartsData.monthly.earningPerMonth();
  $: storyEarning = partnerProgram.getChartsData.monthly.earningPerStory();
  $: treemapWords =
    partnerProgram.getChartsData.monthly.treemapWordsAndEarning();
  $: scatterWords =
    partnerProgram.getChartsData.monthly.scatterWordsAndEarning();
  $: wordPerDay = partnerProgram.getChartsData.monthly.wordPerDay();

  let storySelected;

  function selectedItemClickHandler(e) {
    console.log("event works");
    console.log(e.detail.data);
  }
</script>

<section transition:slide>
  <div class="list">
    <table transition:slide>
      <thead>
        <tr>
          <th class="label">Period</th>
          <th class="value">Earnings</th>
        </tr>
      </thead>
      <tbody>
        {#each monthlyAmounts as data (data.month)}
          <tr>
            <td class="label">{data.month.monthName} {data.month.year}</td>
            <td class="value">{(data.amount / 100).toFixed(2)} $</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>

  <div class="monthlyEarning" transition:slide>
    <GoogleChartColumn
      title="Monthly Earnings"
      data={monthlyEarning}
      colors={["#ea580c"]}
    />
  </div>

  <div class="treemapWords" transition:slide>
    <GoogleChartTreemap
      data={treemapWords}
      title="Words And Earning Per Story"
      maxPostDepth={3}
      minColor="#fed7aa"
      midColor="#f97316"
      maxColor="#9a3412"
    />
  </div>

  <div class="storyEarning" transition:slide>
    <GoogleChartPie
      cols={storyEarning.cols}
      rows={storyEarning.rows}
      title="Earning Per Story"
      sliceVisibilityThreshold={2.5 / 100}
      on:select={(e) => {
        const id = e.detail.value ? e.detail.value[2] : undefined;
        storySelected = id ? partnerProgram.getStoryById(id) : undefined;
      }}
    />
  </div>

  <div class="scatterWords" transition:slide>
    <GoogleChartScatter
      data={scatterWords}
      title="Words vs Dollars comparison"
      colors={["#ea580c"]}
      --range-handle="#ea580c"
      --range-handle-focus="#ea580c"
      on:select={(e) => {
        const tooltip = e.detail.value ? e.detail.value[2] : undefined;
        const re = new RegExp(`(?<=!-- id: )(.*?)(?= -->)`, "gi");
        const id = tooltip ? tooltip.match(re) : undefined;
        storySelected = id ? partnerProgram.getStoryById(id[0]) : undefined;
      }}
    />
  </div>

  {#if storySelected}
    <div class="storySelected">
      <CardStory story={storySelected} />
    </div>
  {/if}

  <div class="wordPerDay" transition:slide>
    <GoogleChartCalendar
      cols={wordPerDay.cols}
      rows={wordPerDay.rows}
      title="Words Per Day"
      colorAxis={["#fdba74", "#9a3412"]}
      on:select={selectedItemClickHandler}
    />
  </div>
</section>

<style lang="postcss">
  section {
    display: grid;
    grid-template-columns: 400px 400px 400px;
    grid-template-rows: 300px 300px auto auto;
    gap: 4px 4px;
    grid-template-areas:
      "list monthlyEarning treemapWords"
      "list storyEarning scatterWords"
      "list storySelected storySelected"
      "dayWithWords dayWithWords dayWithWords";

    justify-content: start;
    align-items: start;
    justify-items: stretch;
  }

  .list {
    grid-area: list;
    max-height: 600px;
    overflow: hidden;
  }

  .monthlyEarning {
    grid-area: monthlyEarning;
  }

  .storyEarning {
    grid-area: storyEarning;
  }

  .scatterWords {
    grid-area: scatterWords;
  }
  .wordPerDay {
    grid-area: dayWithWords;
    overflow-y: hidden;
    overflow-x: auto;
  }

  .storySelected {
    grid-area: storySelected;
    height: 200px;
    padding: 8px;
  }

  table {
    @apply mt-2 ml-1 mr-1 mb-1 table-auto border-collapse;
    width: calc(100% - 0.75rem);
  }

  tbody {
    @apply block overflow-y-scroll overflow-x-hidden w-full;
    max-height: 540px;
  }

  tr {
    @apply p-1 border-slate-400 border-b border-dotted;
  }

  thead tr {
    @apply border-b border-solid border-slate-600;
  }

  tbody tr:hover {
    @apply bg-orange-200;
  }

  .label {
    @apply text-left;
  }

  .value {
    @apply text-right;
  }

  tr {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  tbody::-webkit-scrollbar {
    width: 8px;
  }

  tbody::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(246, 107, 33, 0.5);
    border-radius: 10px;
  }

  tbody::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(234, 88, 12, 0.8);
  }
</style>
