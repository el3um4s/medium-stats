<script lang="ts">
  import type { Table_Labels, Table_Totals, Table_Orders } from "./Table";
  import type { CustomDateTime } from "../../functions/dates";

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

  import TableContextMenu from "../contextMenu/TableContextMenu.svelte";
  let showContextMenu = false;
  let posContextMenu = { x: 0, y: 0 };
  let cellData;
  async function onRightClick(header, event) {
    if (showContextMenu) {
      showContextMenu = false;
      await new Promise((res) => setTimeout(res, 10));
    }
    posContextMenu = { x: event.pageX, y: event.pageY };
    cellData = { ...header };
    showContextMenu = true;
  }

  export let orders: Table_Orders[] = [];

  function orderAsc() {
    rows = [
      ...getFunctions(cellData.key, orders).functionOrderASC(
        cellData.key,
        rows
      ),
    ];
  }

  function orderDesc() {
    rows = [
      ...getFunctions(cellData.key, orders).functionOrderDESC(
        cellData.key,
        rows
      ),
    ];
  }

  function getFunctions(key: string, orders: Table_Orders[]): Table_Orders {
    const index = orders.findIndex((o) => o.key === key);
    return orders[index];
  }
</script>

<TableContextMenu
  show={showContextMenu}
  {...posContextMenu}
  on:order-asc={orderAsc}
  on:order-desc={orderDesc}
/>

<article class="table">
  <header style={gridTemplate}>
    {#each headers as header}
      <div
        class="cell title"
        style={getAlignItem(header)}
        on:contextmenu|preventDefault={(event) => {
          onRightClick(header, event);
        }}
      >
        {header.title}
      </div>
    {/each}
  </header>

  <section style={gridTemplate}>
    {#each rows as row}
      {#each headers as header}
        <div
          class="cell"
          style={getAlignItem(header)}
          on:contextmenu|preventDefault={(event) => {
            onRightClick(header, event);
          }}
        >
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
