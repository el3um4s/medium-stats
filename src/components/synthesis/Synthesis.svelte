<script lang="ts">
  import type { MonthSynthesis } from "./Synthesis";
  export let monthSynthesis: MonthSynthesis;

  const {
    monthlyIncomeTotal,
    monthlyIncomeNewArticle,
    monthlyIncomeOldArticle,
    numberArticleTotal,
    numberArticleNewArticle,
    numberArticleOldArticle,
    monthsTopStory,
  } = monthSynthesis;

  const div = (a: number, b: number): number => (a * b === 0 ? 0 : a / b);
  const averageTotal = div(
    monthlyIncomeTotal / 100,
    numberArticleTotal
  ).toFixed(2);
  const averageNewArticle = div(
    monthlyIncomeNewArticle / 100,
    numberArticleNewArticle
  ).toFixed(2);
  const averageOldArticle = div(
    monthlyIncomeOldArticle / 100,
    numberArticleOldArticle
  ).toFixed(2);
  const percMonthlyIncomeBestArticle = (
    div(monthsTopStory, monthlyIncomeTotal) * 100
  ).toFixed(0);
  const percPassiveIncome = (
    div(monthlyIncomeOldArticle, monthlyIncomeTotal) * 100
  ).toFixed(0);
  const dailyAverageIncome = div(monthlyIncomeTotal, 30);
</script>

<section>
  <header class="row">
    <span />
    <div class="value">
      {monthSynthesis.monthName}
      {monthSynthesis.year}
    </div>
  </header>

  <div class="row row-main">
    <div class="label">Total Monthy Income</div>
    <div class="value">{(monthlyIncomeTotal / 100).toFixed(2)}</div>
  </div>

  <div class="row">
    <div class="label">New Article Earning (Active)</div>
    <div class="value">{(monthlyIncomeNewArticle / 100).toFixed(2)}</div>
  </div>

  <div class="row">
    <div class="label">Old Article Earning (Passive)</div>
    <div class="value">{(monthlyIncomeOldArticle / 100).toFixed(2)}</div>
  </div>

  <div class="row row-main">
    <div class="label">Total Articles</div>
    <div class="value">{numberArticleTotal}</div>
  </div>

  <div class="row">
    <div class="label"># of New Articles Published</div>
    <div class="value">{numberArticleNewArticle}</div>
  </div>

  <div class="row">
    <div class="label"># of Old Articles Published</div>
    <div class="value">{numberArticleOldArticle}</div>
  </div>

  <div class="row row-main">
    <div class="label">Total Avarage $ Of All Articles</div>
    <div class="value">{averageTotal}</div>
  </div>

  <div class="row">
    <div class="label">Avarage $ Per New Article</div>
    <div class="value">{averageNewArticle}</div>
  </div>

  <div class="row dotted">
    <div class="label">Avarage $ Per Old Article</div>
    <div class="value">{averageOldArticle}</div>
  </div>

  <div class="row">
    <div class="label">Month's Top Story</div>
    <div class="value">{(monthsTopStory / 100).toFixed(2)}</div>
  </div>

  <div class="row dotted">
    <div class="label">% Monthly Income</div>
    <div class="value">{percMonthlyIncomeBestArticle} %</div>
  </div>

  <div class="row dotted">
    <div class="label">% Passive Income</div>
    <div class="value">{percPassiveIncome} %</div>
  </div>

  <div class="row">
    <div class="label">Daily Average Income (30 days)</div>
    <div class="value">{(dailyAverageIncome / 100).toFixed(2)}</div>
  </div>
</section>

<style lang="postcss">
  header {
    font-weight: 700;
  }

  section {
    @apply flex flex-col;
    border-bottom: 1px solid var(--text-color, theme("colors.gray.500"));
  }

  .row {
    @apply grid;
    grid-template-columns: 30ch auto;
  }

  .row-main {
    border-top: 1px solid var(--text-color, theme("colors.gray.500"));
    border-bottom: 1px dashed var(--text-color, theme("colors.gray.500"));
    font-weight: 700;
  }

  div.row:hover {
    background-color: theme("colors.orange.100");
  }

  .dotted {
    border-bottom: 1px dashed var(--text-color, theme("colors.gray.500"));
  }

  .label,
  .value {
    @apply pt-1 pb-1 pr-1 pl-1;
    box-sizing: content-box;
  }

  .value {
    text-align: end;
  }
</style>
