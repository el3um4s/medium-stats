<script lang="ts">
  import type { MonthSynthesis } from "./Synthesis";
  export let monthSynthesis: MonthSynthesis;
</script>

<article>
  <div>Total Monthy Income: {monthSynthesis.monthlyIncomeTotal}</div>
  <div>
    New Article Earning (Active): {monthSynthesis.monthlyIncomeNewArticle}
  </div>
  <div>
    Old Article Earning (Passive): {monthSynthesis.monthlyIncomeOldArticle}
  </div>

  <div>Total Articles: {monthSynthesis.numberArticleTotal}</div>
  <div>
    # of New Articles Published: {monthSynthesis.numberArticleNewArticle}
  </div>
  <div>
    # of Old Articles Published: {monthSynthesis.numberArticleOldArticle}
  </div>

  <div>Month's top story: {monthSynthesis.monthsTopStory}</div>
</article>

<style lang="postcss">
</style>
