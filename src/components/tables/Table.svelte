<script lang="ts">
  import type { Table_Labels, Table_Totals, Table_Orders } from "./Table";
  import type { CustomDateTime } from "../../Interfaces/CustomDateTime";

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

  $: gridTemplate = `grid-template-columns: 4ch ${getWidthColumns(headers)};`;

  const convertToDollars = (cents: number) => (cents / 100).toFixed(2);
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

  $: cellData = !showContextMenu ? null : cellData;

  export let chartColumn: string = "";
  export let chartValue: string = "";

  $: chartListValues = [
    ...rows.map((row) => {
      return row[chartValue];
    }),
  ];
  $: chartMaxValue = Math.max(...chartListValues);

  function chartStyle(condition, value) {
    if (!condition) {
      return "";
    }
    const left = Math.round((value / chartMaxValue) * 100);
    const result = `background:linear-gradient(to right,#fdba74 ${left}%, transparent ${left}%)`;
    return result;
  }

  export let chartsColumns: string[] = [];

  function chartThis() {
    chartValue = cellData.key;
  }

  import { flip } from "svelte/animate";
  import { sineOut } from "svelte/easing";
</script>

<article class="table">
  <TableContextMenu
    show={showContextMenu}
    {...posContextMenu}
    on:order-asc={orderAsc}
    on:order-desc={orderDesc}
    on:hide={() => {
      showContextMenu = false;
    }}
    canChart={chartsColumns.includes(cellData?.key)}
    on:chart-this={chartThis}
  />
  <div class="header" style={gridTemplate}>
    <div class="cell title" />
    {#each headers as header (header.key)}
      <div
        class="cell title"
        class:column-order={cellData?.key === header.key}
        class:data-charted={chartValue === header.key}
        style={getAlignItem(header)}
        on:contextmenu|preventDefault={(event) => {
          onRightClick(header, event);
        }}
      >
        {header.title}
      </div>
    {/each}
  </div>

  <section>
    {#each rows as row, index (row.id)}
      <div
        class="row"
        style={gridTemplate}
        animate:flip={{ duration: 1000, easing: sineOut }}
      >
        <div class="cell">
          {index + 1}
        </div>
        {#each headers as header (header.key)}
          <div
            class="cell"
            style={getAlignItem(header)}
            class:column-order={cellData?.key === header.key}
            class:data-charted={chartValue === header.key}
            on:contextmenu|preventDefault={(event) => {
              onRightClick(header, event);
            }}
          >
            <div
              class="chart-bar"
              style={chartStyle(chartColumn === header.key, row[chartValue])}
            >
              {convert(header.type, row[header.key])}
            </div>
          </div>
        {/each}
      </div>
    {/each}
  </section>

  {#if totals.length > 0}
    <div class="footer" style={gridTemplate}>
      <div class="cell total" />
      {#each totals as total}
        <div
          class="cell total"
          class:column-order={cellData?.key === total.key}
          class:data-charted={chartValue === total.key}
          style={getAlignItem(total)}
          on:contextmenu|preventDefault={(event) => {
            onRightClick(total, event);
          }}
        >
          {convert(total.type, total.value)}
        </div>
      {/each}
    </div>
  {/if}
</article>

<style lang="postcss">
  article {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: 100%;
    /* width: 100%; */
  }

  .header,
  .footer {
    display: grid;
  }
  .header {
    border-bottom: 2px solid var(--text-color, theme("colors.gray.800"));
    width: calc(100% - 1rem);
  }

  .footer {
    border-top: 2px solid var(--text-color, theme("colors.gray.800"));
    border-bottom: 1px solid var(--text-color, theme("colors.gray.800"));
    width: calc(100% - 1rem);
  }

  section {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }

  .row {
    display: grid;
    border-bottom: 1px dotted var(--text-color, theme("colors.gray.500"));
  }

  .row:hover {
    background-color: theme("colors.orange.100");
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
    border: 2px solid transparent;
    box-sizing: content-box;
  }

  .column-order {
    border-left: 2px dotted theme("colors.orange.300");
    border-right: 2px dotted theme("colors.orange.300");
    background-color: theme("colors.orange.100");
  }

  .data-charted {
    font-weight: 700;
  }
  .title {
    @apply font-bold;
  }
</style>
