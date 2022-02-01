<script lang="ts">
  import type { PartnerProgram } from "../../../Interfaces/MediumPartnerProgram";
  import { synthesis } from "./Synthesis";

  export let mediumPartnerProgram: PartnerProgram;

  $: monthSynthesis = synthesis(mediumPartnerProgram);
</script>

<div class="synthesis">
  <div class="header row">
    <span />
    <div class="value">
      {monthSynthesis.monthName}
      {monthSynthesis.year}
    </div>
  </div>

  <div class="row row-main">
    <div class="label">Total Monthy Income</div>
    <div class="value">
      {(monthSynthesis.monthlyIncomeTotal / 100).toFixed(2)}
    </div>
  </div>

  <div class="row">
    <div class="label">New Article Earning (Active)</div>
    <div class="value">
      {(monthSynthesis.monthlyIncomeNewArticle / 100).toFixed(2)}
    </div>
  </div>

  <div class="row">
    <div class="label">Old Article Earning (Passive)</div>
    <div class="value">
      {(monthSynthesis.monthlyIncomeOldArticle / 100).toFixed(2)}
    </div>
  </div>

  <div class="row row-main">
    <div class="label">Total Articles</div>
    <div class="value">{monthSynthesis.numberArticleTotal}</div>
  </div>

  <div class="row">
    <div class="label"># of New Articles Published</div>
    <div class="value">{monthSynthesis.numberArticleNewArticle}</div>
  </div>

  <div class="row">
    <div class="label"># of Old Articles Published</div>
    <div class="value">{monthSynthesis.numberArticleOldArticle}</div>
  </div>

  <div class="row row-main">
    <div class="label">Total Avarage $ Of All Articles</div>
    <div class="value">{(monthSynthesis.averageTotal / 100).toFixed(2)}</div>
  </div>

  <div class="row">
    <div class="label">Avarage $ Per New Article</div>
    <div class="value">
      {(monthSynthesis.averageNewArticle / 100).toFixed(2)}
    </div>
  </div>

  <div class="row dotted">
    <div class="label">Avarage $ Per Old Article</div>
    <div class="value">
      {(monthSynthesis.averageOldArticle / 100).toFixed(2)}
    </div>
  </div>

  <div class="row">
    <div class="label">Month's Top Story</div>
    <div class="value">{(monthSynthesis.monthsTopStory / 100).toFixed(2)}</div>
  </div>

  <div class="row dotted">
    <div class="label">% Monthly Income</div>
    <div class="value">
      {(monthSynthesis.percMonthlyIncomeBestArticle * 100).toFixed(0)}%
    </div>
  </div>

  <div class="row dotted">
    <div class="label">% Passive Income</div>
    <div class="value">
      {(monthSynthesis.percPassiveIncome * 100).toFixed(0)}%
    </div>
  </div>

  <div class="row">
    <div class="label">Daily Average Income (30 days)</div>
    <div class="value">
      {(monthSynthesis.dailyAverageIncome / 100).toFixed(2)}
    </div>
  </div>
</div>

<style lang="postcss">
  .header {
    font-weight: 700;
  }

  .synthesis {
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
