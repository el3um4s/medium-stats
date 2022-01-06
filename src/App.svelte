<script lang="ts">
  import "./css/tailwind.pcss";

  // const urlMedium: string = "https://medium.com/me/stats?format=json&count=100"; // stats.json
  const urlMedium: string =
    "https://medium.com/me/partner/dashboard?format=json"; // dashboard.json

  let listStories = [];

  async function click() {
    let [fileHandle] = await window.showOpenFilePicker();
    const file = await fileHandle.getFile();
    const contents = await file.text();
    // console.log(contents);
    const stats = JSON.parse(sanitizeOriginalStats(contents));
    // console.log(stats);

    listStories = [...getListStories(stats.payload.postAmounts)];
  }

  function sanitizeOriginalStats(contents) {
    const result = contents.startsWith(`])}while(1);</x>`)
      ? contents.replace(`])}while(1);</x>`, "")
      : contents;
    return result;
  }

  function getListStories(postAmounts) {
    const result = postAmounts.map((p) => {
      return {
        id: p.post.id,
        title: p.post.title,
        amount: p.amount,
        totalAmountPaidToDate: p.totalAmountPaidToDate,
        homeCollectionId: p.post.homeCollectionId,
        wordCount: p.post.virtuals.wordCount,
        readingTime: p.post.virtuals.readingTime,
        firstPublishedAt: p.post.firstPublishedAt,
      };
    });
    return result;
  }
</script>

<main>
  <p>Version: 0.0.3</p>

  <p>
    1. <a
      sveltekit:prefetch
      href={urlMedium}
      target="_blank"
      rel="noopener noreferrer">Save dashboard.json</a
    >
  </p>

  <p>2. Load dashboard.json</p>
  <button on:click={click}>Open</button>

  <ul>
    {#each listStories as story, i (story.id)}
      <li>{i + 1}) - {story.title} x {story.totalAmountPaidToDate}</li>
    {/each}
  </ul>
</main>

<style lang="postcss">
</style>
