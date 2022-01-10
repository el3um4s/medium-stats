<script lang="ts">
  import type { Table_Labels, Table_Totals } from "./Table";
  import type { CustomDateTime } from "../functions/dates";

  export let rows = [];
  export let headers: Table_Labels[] = [];
  export let totals: Table_Totals[] = [];

  const getWidthColumns = (header: Table_Labels[]) => {
    const widths = header.map((h) => (h?.width ? h.width : "auto"));
    return widths.join(" ");
  };

  const getAlignItem = (header: Table_Labels) => {
    return header?.align ? `text-align: ${header.align};` : "";
  };

  $: gridTemplate = `grid-template-columns: ${getWidthColumns(headers)};`;

  const convertToDollars = (cents: number) => cents / 100;
  const convertToDate = (date: CustomDateTime) =>
    `${date.year} ${date.monthName} ${date.day}`;

  const convert = (t: string, v: number | CustomDateTime | string) => {
    if (t === "cents" && typeof v === "number") {
      return convertToDollars(v);
    }
    if (t === "date" && typeof v === "object") {
      return convertToDate(v);
    }
    return v;
  };
</script>

<article class="table">
  <header style={gridTemplate}>
    {#each headers as header}
      <div class="cell title" style={getAlignItem(header)}>
        {header.title}
      </div>
    {/each}
  </header>

  <section style={gridTemplate}>
    {#each rows as row}
      {#each headers as header}
        <div class="cell" style={getAlignItem(header)}>
          {convert(header.type, row[header.key])}
        </div>
      {/each}
    {/each}
  </section>

  {#if totals.length > 0}
    <footer style={gridTemplate}>
      {#each totals as total}
        <div class="cell total" style={getAlignItem(total)}>
          {convert(total.type, total.value)}
        </div>
      {/each}
    </footer>
  {/if}
</article>

<style lang="postcss">
  article {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: 100%;
    width: 100%;
  }

  header,
  section,
  footer {
    display: grid;
  }
  header {
    border-bottom: 1px solid var(--text-color, theme("colors.gray.800"));
    width: calc(100% - 1rem);
  }

  footer {
    border-top: 1px solid var(--text-color, theme("colors.gray.800"));
    border-bottom: 1px solid var(--text-color, theme("colors.gray.800"));
    width: calc(100% - 1rem);
  }

  section {
    overflow-y: auto;
  }

  ::-webkit-scrollbar {
    width: 1rem;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(246, 107, 33, 0.5);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(234, 88, 12, 0.8);
  }
  .cell {
    @apply pt-2 pb-2 pr-1 pl-1;
  }

  .title {
    @apply font-bold;
  }
  /* .table > div.table-header {
    @apply font-bold;
  } */
</style>
