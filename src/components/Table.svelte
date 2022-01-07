<script lang="ts">
  export let rows = [];
  export let headers = [];

  const style = `display: grid; grid-template-columns: repeat(${headers.length}, minmax(0, 1fr));`;

  const convertToMonth = (date: Date) => date.getMonth();
  const convertToDollars = (cents: number) => cents / 100;

  const convert = (t, v) => {
    if (t === "cents") {
      return convertToDollars(v);
    }
    if (t === "date") {
      return convertToMonth(new Date(v));
    }
    return v;
  };
</script>

<div class="table" {style}>
  {#each headers as header}
    <span class="table-header">{header.title}</span>
  {/each}

  {#each rows as row}
    {#each headers as header}
      <span>{convert(header.type, row[header.key])}</span>
    {/each}
  {/each}
</div>

<style lang="postcss">
  .table > span {
    @apply pt-2 pb-2 pr-1 pl-1;
    border-bottom: 1px solid var(--text-color, theme("colors.gray.800"));
  }
  .table > span.table-header {
    @apply font-bold;
  }
</style>
