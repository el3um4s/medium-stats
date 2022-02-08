<script lang="ts">
  import { slide } from "svelte/transition";
  import { partnerProgram } from "../../../stores/PartnerProgram/StorePartnerProgram";
  import type { PartnerProgram_Analysis_ListStories } from "../../../Interfaces/MediumPartnerProgram";

  import { writingDay } from "./SynthesisCharts";
  import type { CustomDateTime } from "../../../Interfaces/CustomDateTime";

  import Synthesis from "./Synthesis.svelte";
  import GoogleChartPie from "../../GoogleCharts/GoogleChartPie.svelte";
  import GoogleChartCalendar from "../../GoogleCharts/GoogleChartCalendar.svelte";

  $: currentMonth = partnerProgram.getCurrentMonthDate();
  $: listStories = partnerProgram.getListStories();
  $: earningForMonthPublished =
    partnerProgram.getChartsData.currentMonth.earningPerMonthPub();
  $: earningForStoryPublished =
    partnerProgram.getChartsData.currentMonth.earningPerMonthStory();
  $: dayWithWords = writingDay(filterCurrenMonth(listStories, currentMonth));

  function filterCurrenMonth(
    list: PartnerProgram_Analysis_ListStories[],
    month: CustomDateTime
  ) {
    return list.filter(
      (story) =>
        story.firstPublishedAt.month === month.month &&
        story.firstPublishedAt.year === month.year
    );
  }
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
    />
  </div>
  <div class="dayWithWords">
    <GoogleChartCalendar
      cols={dayWithWords.cols}
      rows={dayWithWords.rows}
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
      "synthesis other other"
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
  .dayWithWords {
    grid-area: dayWithWords;
    width: 100%;
    height: 200px;
    overflow-y: hidden;
    overflow-x: auto;
  }
</style>
