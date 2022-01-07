<script lang="ts">
  export let data = [];
  export let labels = [];

  $: columns = data.length;
  $: maxData = Math.max(...data);
  $: positionColumns = `grid-template-columns: repeat(${columns}, minmax(0, 1fr));`;
</script>

<section>
  <div class="columns data" style={positionColumns}>
    {#each data as d (Math.random())}
      <div class="column" style="height:{(d / maxData) * 100}%;">
        <span class="value">{d / 100}</span>
      </div>
    {/each}
  </div>
  <div class="columns labels" style={positionColumns}>
    {#each labels as l (Math.random())}
      <div>{l}</div>
    {/each}
  </div>
</section>

<style lang="postcss">
  section {
    @apply w-full h-full grid items-end;
    grid-template-rows: auto 32px;
  }

  .columns {
    display: grid;
    justify-items: center;
    column-gap: 4px;
  }

  .data {
    @apply h-5/6 items-end;
  }

  .labels {
    @apply border-t border-slate-600 h-8 align-top;
  }

  .column {
    @apply bg-orange-600 w-full text-center font-bold;
    color: transparent;
  }

  .column:hover {
    @apply bg-red-600 text-red-600;
  }

  .value {
    position: relative;
    top: -32px;
  }
</style>
