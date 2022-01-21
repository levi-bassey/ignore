<script lang="ts">
  import InvoiceTableRow from "./InvoiceTableRow.svelte";

  export let invoices: any;
</script>

<table
  class="mt-4 mx-auto w-11/12 max-w-lg flex flex-col space-y-4 md:max-w-2xl md:mt-10 lg:mt-12"
>
  <caption class="sr-only"> Invoices </caption>

  <thead class="sr-only">
    <tr>
      <th>Invoice ID</th>
      <th>Due Date</th>
      <th>Client Name</th>
      <th>Total</th>
      <th>Status</th>
    </tr>
  </thead>

  {#each invoices as invoice}
    <InvoiceTableRow {invoice} />
  {/each}
</table>
