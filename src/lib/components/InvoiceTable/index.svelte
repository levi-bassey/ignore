<script lang="ts">
  import InvoiceTableRow from "./InvoiceTableRow.svelte";
</script>

<table
  class="mt-8 mx-auto w-11/12 max-w-lg flex flex-col space-y-4 md:max-w-2xl md:mt-14 lg:mt-16"
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

  <InvoiceTableRow />
</table>
