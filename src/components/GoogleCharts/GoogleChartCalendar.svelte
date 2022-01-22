<script lang="ts">
  import "@google-web-components/google-chart";

  export let cols: {
    id: string;
    type: string;
  }[] = [];
  export let rows: [Date, number][] = [];
  export let title: String = "";

  // let cols = [
  //   { type: "date", id: "Date" },
  //   { type: "number", id: "Won/Loss" },
  // ];

  // let rows = [
  //   [new Date(2012, 3, 13), 37032],
  //   [new Date(2012, 3, 14), 38024],
  //   [new Date(2012, 3, 15), 38024],
  //   [new Date(2012, 3, 16), 38108],
  //   [new Date(2012, 3, 17), 38229],
  //   [new Date(2013, 9, 4), 38177],
  //   [new Date(2013, 9, 5), 38705],
  //   [new Date(2013, 9, 12), 38210],
  //   [new Date(2013, 9, 13), 38029],
  //   [new Date(2013, 9, 19), 38823],
  //   [new Date(2013, 9, 23), 38345],
  //   [new Date(2013, 9, 24), 38436],
  //   [new Date(2013, 9, 30), 38447],
  // ];
</script>

<google-chart
  type="calendar"
  {cols}
  {rows}
  options={{
    title: title,
    backgroundColor: "transparent",
  }}
/>
