<script lang="ts">
  import "./css/tailwind.pcss";
  // import Table from "./components/Table.svelte";

  // const urlMedium: string = "https://medium.com/me/stats?format=json&count=100"; // stats.json
  const urlMedium: string =
    "https://medium.com/me/partner/dashboard?format=json"; // dashboard.json

  let listStories = [];
  let monthlyAmounts = [];

  async function loadDashboardJSON() {
    let [fileHandle] = await window.showOpenFilePicker();
    const file = await fileHandle.getFile();
    const contents = await file.text();
    const stats = JSON.parse(sanitizeOriginalStats(contents));
    return stats;
  }

  function sanitizeOriginalStats(contents) {
    const result = contents.startsWith(`])}while(1);</x>`)
      ? contents.replace(`])}while(1);</x>`, "")
      : contents;
    return result;
  }

  function getMonthlyAmounts(stats) {
    const currentMonth = getMonthStats(stats.payload.currentMonthAmount, true);
    const previousMonths = stats.payload.completedMonthlyAmounts.map(
      (month) => {
        return getMonthStats(month);
      }
    );

    return [currentMonth, ...previousMonths];
  }

  function getMonthStats(month, isCurrentMonth = false) {
    return {
      isCurrentMonth,
      month: getDate(month.periodStartedAt),
      amount: parseInt(month.amount),
    };
  }

  function getDate(periodStartedAt) {
    const date = new Date(parseInt(periodStartedAt));
    return {
      year: date.getFullYear(),
      month: date.getMonth(),
      monthName: date.toLocaleString("default", { month: "short" }),
    };
  }

  function getListStories(postAmounts) {
    const result = postAmounts.map((p) => {
      return {
        id: p.post.id,
        title: p.post.title,
        amountMonth: p.amount,
        amountTot: p.totalAmountPaidToDate,
        homeCollectionId: p.post.homeCollectionId,
        wordCount: p.post.virtuals.wordCount,
        readingTime: p.post.virtuals.readingTime,
        firstPublishedAt: p.post.firstPublishedAt,
      };
    });
    return result;
  }

  // const headersTable = [
  //   { key: "firstPublishedAt", title: "Date", type: "date" },
  //   { key: "title", title: "Title", type: "text" },
  //   { key: "amountMonth", title: "$ (Month)", type: "cents" },
  //   { key: "amountTot", title: "$ (Tot)", type: "cents" },
  //   { key: "wordCount", title: "Word", type: "numeric" },
  // ];
</script>

<main>
  <p>Version: 0.0.1</p>

  <button
    on:click={() => {
      window.open(urlMedium, "medium stats");
    }}>Save dashboard.json</button
  >

  <button
    on:click={async () => {
      const stats = await loadDashboardJSON();
      monthlyAmounts = [...getMonthlyAmounts(stats)];
      // listStories = [...getListStories(stats.payload.postAmounts)];
    }}>Load dashboard.json</button
  >

  {#if monthlyAmounts.length > 0}
    <ul>
      {#each monthlyAmounts as data (data.month)}
        <li>
          {data.month.monthName}
          {data.month.year} - {data.amount / 100} $
        </li>
      {/each}
    </ul>
  {/if}

  <!-- {#if listStories.length > 0}
    <Table rows={listStories} headers={headersTable} />
  {/if} -->
</main>

<style lang="postcss">
</style>
