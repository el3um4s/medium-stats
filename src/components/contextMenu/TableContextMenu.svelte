<script lang="ts">
  import { fade } from "svelte/transition";

  import SortAscending from "./SortAscending.svelte";
  import SortDescending from "./SortDescending.svelte";
  import ChartBar from "./ChartBar.svelte";

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let x: number = 0;
  export let y: number = 0;
  export let show: boolean = false;

  export let canChart: boolean = false;

  const hide = () => {
    show = false;
    dispatch("hide");
  };
</script>

{#if show}
  <div
    class="table-context-menu"
    style:visible={show}
    style:left="{x}px"
    style:top="{y}px"
    transition:fade
  >
    <button
      on:click={() => {
        hide();
        dispatch("order-desc");
      }}><SortDescending /></button
    >
    <button
      on:click={() => {
        hide();
        dispatch("order-asc");
      }}><SortAscending /></button
    >
    {#if canChart}
      <button
        on:click={() => {
          hide();
          dispatch("chart-this");
        }}><ChartBar /></button
      >
    {/if}
  </div>
{/if}

<svelte:body on:click={hide} on:wheel={hide} />

<style lang="postcss">
  .table-context-menu {
    position: absolute;
    display: grid;
    border: 1px solid #0003;
    box-shadow: 2px 2px 5px 0px #0002;
    background: white;
    padding: 4px;
  }
</style>
