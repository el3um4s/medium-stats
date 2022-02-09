<script lang="ts">
  import { slide } from "svelte/transition";
  import { partnerProgram } from "../../../stores/PartnerProgram/StorePartnerProgram";

  import type { CustomDateTime } from "../../../Interfaces/CustomDateTime";

  import Synthesis from "./Synthesis.svelte";
  import GoogleChartPie from "../../GoogleCharts/GoogleChartPie.svelte";
  import GoogleChartCalendar from "../../GoogleCharts/GoogleChartCalendar.svelte";

  import CardStory from "../CardStory/CardStory.svelte";

  $: currentMonth = partnerProgram.getCurrentMonthDate();

  $: earningForMonthPublished =
    partnerProgram.getChartsData.currentMonth.earningPerMonthPub();
  $: earningForStoryPublished =
    partnerProgram.getChartsData.currentMonth.earningPerMonthStory();

  $: wordPerDay = filteredDate(
    partnerProgram.getChartsData.monthly.wordPerDay(),
    currentMonth
  );

  function filteredDate(calendar, month: CustomDateTime) {
    const totalRows = calendar.rows;

    const rows = totalRows.filter(
      (r) =>
        r[0].getMonth() === month.month && r[0].getFullYear() === month.year
    );
    const cols = calendar.cols;
    return { rows, cols };
  }

  let storySelected;
</script>

<section class="syntPlusMonthPubs" transition:slide>
  <div class="synthesis">
    <Synthesis />
  </div>

  <div class="earningForMonthPublished">
    <GoogleChartPie
      cols={earningForMonthPublished.cols}
      rows={earningForMonthPublished.rows}
      title="Earning Per Month of Publication"
    />
  </div>
  <div class="earningForStoryPublished">
    <GoogleChartPie
      cols={earningForStoryPublished.cols}
      rows={earningForStoryPublished.rows}
      title="Earning Per Story"
      on:select={(e) => {
        const id = e.detail.value ? e.detail.value[2] : undefined;
        storySelected = id ? partnerProgram.getStoryById(id) : undefined;
      }}
    />
  </div>
  <div class="storySelected">
    {#if storySelected}
      <CardStory story={storySelected} />
    {/if}
  </div>
  <div class="dayWithWords">
    <GoogleChartCalendar
      cols={wordPerDay.cols}
      rows={wordPerDay.rows}
      title="Words Per Day"
      colorAxis={["#38bdf8", "#075985"]}
    />
  </div>
</section>

<style lang="postcss">
  section {
    display: grid;
    grid-template-columns: 400px 340px 340px;
    grid-template-rows: auto auto auto;
    gap: 0px 0px;
    grid-template-areas:
      "synthesis earningForMonthPublished earningForStoryPublished"
      "synthesis storySelected storySelected"
      "dayWithWords dayWithWords dayWithWords";
  }

  .synthesis {
    grid-area: synthesis;
  }
  .earningForMonthPublished {
    grid-area: earningForMonthPublished;
  }
  .earningForStoryPublished {
    grid-area: earningForStoryPublished;
  }

  .storySelected {
    grid-area: storySelected;
    height: 200px;
    padding: 8px;
  }

  .dayWithWords {
    grid-area: dayWithWords;
    width: 100%;
    height: 200px;
    overflow-y: hidden;
    overflow-x: auto;
  }
</style>
