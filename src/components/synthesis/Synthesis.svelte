<script lang="ts">
  import type { MonthSynthesis } from "./Synthesis";
  export let monthSynthesis: MonthSynthesis;
</script>

<article>
  <header>
    {monthSynthesis.monthName}
    {monthSynthesis.year}
  </header>

  <section>
    <div class="row">
      <div class="label">Total Monthy Income:</div>
      <div class="value">{monthSynthesis.monthlyIncomeTotal}</div>
    </div>

    <div class="row">
      <div class="label">New Article Earning (Active):</div>
      <div class="value">{monthSynthesis.monthlyIncomeNewArticle}</div>
    </div>

    <div class="row">
      <div class="label">Old Article Earning (Passive):</div>
      <div class="value">{monthSynthesis.monthlyIncomeOldArticle}</div>
    </div>

    <div class="row">
      <div class="label">Total Articles:</div>
      <div class="value">{monthSynthesis.numberArticleTotal}</div>
    </div>

    <div class="row">
      <div class="label"># of New Articles Published:</div>
      <div class="value">{monthSynthesis.numberArticleNewArticle}</div>
    </div>

    <div class="row">
      <div class="label"># of Old Articles Published:</div>
      <div class="value">{monthSynthesis.numberArticleOldArticle}</div>
    </div>

    <div class="row">
      <div class="label">Month's top story:</div>
      <div class="value">{monthSynthesis.monthsTopStory}</div>
    </div>
  </section>
</article>

<style lang="postcss">
  header {
    font-weight: 700;
  }

  section {
    @apply flex flex-col;
  }

  .row {
    @apply grid grid-cols-2;
  }
</style>
