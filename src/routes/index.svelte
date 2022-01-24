<script context="module" lang="ts">
  import type { Load } from "@sveltejs/kit";
  import { invoices } from "../data";

  export const load: Load = () => {
    return {
      props: {
        invoices,
      },
    };
  };
</script>

<script lang="ts">
  import InvoiceTable from "$lib/components/InvoiceTable/index.svelte";
  import InvoiceTableFilter from "$lib/components/InvoiceTableFilter.svelte";
  import NewInvoiceForm from "$lib/components/NewInvoiceForm.svelte";
  import type { Invoice, Filter } from "$lib/types";

  export let invoices: Invoice[];

  let filter: Filter = "all";

  $: filtered =
    filter === "all"
      ? invoices
      : filter === "pending"
      ? invoices.filter((item) => item.status === "pending")
      : invoices.filter((item) => item.status === "paid");

  const generateTableStatus = (num: number, filter: Filter): string => {
    const quantityPart = `${num <= 0 ? "no" : num}`;
    const filterTypePart = `${
      filter === "all" ? (num > 1 ? "total" : "") : filter
    }`;
    const pluralPart = `${num === 1 ? "" : "s"}`;

    return `${quantityPart} ${filterTypePart} invoice${pluralPart}`;
  };
</script>

<div
  class="flex items-center mt-8 mx-auto w-11/12 max-w-lg md:mt-14 md:max-w-3xl lg:mt-16"
>
  <div class="">
    <h1 class="text-xl font-bold md:text-3xl">Invoices</h1>
    <p class="mt-0.5 text-light-blue-300 first-letter:capitalize md:mt-2">
      {generateTableStatus(filtered.length, filter)}
    </p>
  </div>
  <InvoiceTableFilter {filter} on:filter={(e) => (filter = e.detail)} />
  <NewInvoiceForm />
</div>

<div class="pb-24">
  <InvoiceTable invoices={filtered} />
</div>
