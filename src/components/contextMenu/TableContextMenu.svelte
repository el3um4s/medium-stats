<script lang="ts">
  import SortAscending from "./SortAscending.svelte";
  import SortDescending from "./SortDescending.svelte";

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let x: number = 0;
  export let y: number = 0;
  export let show: boolean = false;

  const hide = () => {
    show = false;
  };
</script>

{#if show}
  <section style="top: {y}px; left: {x}px;">
    <button
      on:click={() => {
        show = false;
        dispatch("order-desc");
      }}><SortDescending /></button
    >
    <button
      on:click={() => {
        show = false;
        dispatch("order-asc");
      }}><SortAscending /></button
    >
  </section>
{/if}

<svelte:body on:click={hide} on:wheel={hide} />

<style lang="postcss">
  section {
    position: absolute;
    display: grid;
    border: 1px solid #0003;
    box-shadow: 2px 2px 5px 0px #0002;
    background: white;
    padding: 4px;
  }
</style>
